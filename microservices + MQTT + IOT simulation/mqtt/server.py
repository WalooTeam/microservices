import socket
import threading
import requests
import json

# Server configuration
HOST = '192.168.137.22'  # Localhost
PORT = 1883         # MQTT default port for simulation

# Your Spring Boot API endpoint
API_ENDPOINT = "http://192.168.137.22:51548/v1/medical-data/receive"

def handle_client(client_socket):
    """
    Handles incoming client data and forwards it to the Spring Boot API.
    """
    try:
        while True:
            # Receive data from the client
            message = client_socket.recv(1024).decode('utf-8')
            if not message:
                break  # Client disconnected

            print(f"Received: {message}")

            # Convert to JSON and send to the API
            try:
                data = json.loads(message)
                response = requests.post(API_ENDPOINT, json=data)
                print(f"Forwarded to API, Response: {response.status_code}")
            except json.JSONDecodeError:
                print("Invalid JSON format")
            except requests.RequestException as e:
                print(f"Failed to forward data: {e}")

    finally:
        client_socket.close()

def start_server():
    """
    Starts the mock MQTT-like server.
    """
    server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server.bind((HOST, PORT))
    server.listen(5)  # Max 5 clients
    print(f"Server started on {HOST}:{PORT}")

    while True:
        client_socket, addr = server.accept()
        print(f"Connection from {addr}")
        # Handle client in a new thread
        client_thread = threading.Thread(target=handle_client, args=(client_socket,))
        client_thread.start()

if __name__ == "__main__":
    start_server()
