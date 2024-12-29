import socket
import json
import time
import random

# Server configuration
HOST = '192.168.137.22'  # Server IP
PORT = 1883         # Server port

def generate_medical_data():
    """
    Generates mock medical data.
    """
    return {
        "userId": f"user-{random.randint(1, 100)}",
        "temperature": round(35.0 + random.random() * 5.0, 2),
        "heartRate": random.randint(60, 100),
        "motionDetected": random.choice([True, False]),
        "timestamp": time.strftime('%Y-%m-%dT%H:%M:%S')
    }

def start_client():
    """
    Connects to the mock MQTT-like server and sends data.
    """
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as client:
        client.connect((HOST, PORT))
        print(f"Connected to server at {HOST}:{PORT}")

        try:
            while True:
                # Generate and send medical data
                data = generate_medical_data()
                message = json.dumps(data)
                client.sendall(message.encode('utf-8'))
                print(f"Sent: {message}")

                time.sleep(5)  # Send data every 5 seconds
        except KeyboardInterrupt:
            print("Client disconnected.")

if __name__ == "__main__":
    start_client()
