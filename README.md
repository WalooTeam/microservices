# IoT Patient Monitoring System

## Description

This platform enables real-time monitoring of patients using IoT sensors to track vital signs. Data is processed through a robust microservices architecture to deliver critical alerts to caregivers, ensuring timely and effective healthcare management.

---

## Table of Contents

- [Software Architecture](#software-architecture)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Contributing](#contributing)
- [Contributors](#contributors)

---

## Software Architecture

![Microservices Architecture](/arcitechture.png)

### Key Components

1. **Patient Environment**:
   - Sensors for vitals like movement, heartbeat, and temperature.
   - MQTT protocol for data transfer.

2. **API Gateway**:
   - Routes requests to appropriate microservices.

3. **Eureka Discovery Server**:
   - Facilitates service discovery for microservices.

4. **Microservices**:
   - **Authentication Service**: Handles user authentication.
   - **Caregiver Service**: Manages caregiver-patient relationships.
   - **Data Collection and Processing Service**: Processes sensor data and generates actionable alerts.
   - **Alert Service**: Sends critical alerts to caregivers.

5. **Databases**:
   - User Database: Stores caregiver and patient records.
   - Raw Data Database: Archives sensor data.

---

## Technologies Used

- **Backend**:
  - Spring Boot for microservices.
  - Eureka for service discovery.
  - RabbitMQ/MQTT for message queuing.

- **Frontend**:
  - React for web applications.
  - Flutter for cross-platform mobile applications.

- **Database**:
  - MySQL for structured data.

---

## Setup Instructions

### Prerequisites

---

### React Setup

1. **Install Node.js**:
   - Download and install Node.js from [https://nodejs.org/](https://nodejs.org/).

2. **Navigate to the React project directory**:
   
         
         cd patient-track
   
3.**Install dependencies:**

      
      npm install


4.**Start the React app**:

     
      npm start
  
      
5.**Access the app**:

Open http://localhost:3000 in your browser.

---

### Flutter Setup

1.**Install Flutter**:

Follow the official installation guide: Flutter Installation.


2.**Navigate to the Flutter project directory**:

      
      cd flutter-app


3.**Install dependencies**: 

      
      flutter pub get

4.**Run the Flutter app**:

Connect a device or start an emulator.

Execute:

      
      flutter run
      
5.**Access the app**:

The app will launch on the connected device or emulator.


## Clone the repository
      
      git clone https://github.com/WalooTeam/microservices.git
      cd microservices

## Usage

### Authentication:
- **Admin**:
  - Email: `admin@example.com`
  - Password: `admin`
- **Caregiver**:
  - Email: `caregiver@example.com`
  - Password: `caregiver`

### Alerts:
- Real-time notifications for critical patient conditions.
- Alert details include patient name, status, and location.

---


## Contributing

Contributions are welcome! Please fork the repository and create a pull request for review.

---


## Demo

https://github.com/user-attachments/assets/49646f3c-0f48-4c00-8c8c-3d82c82b2c3a

---

Téléchargez la vidéo de démonstration Flutter [ici](flutter_demo.mp4).

---


## Contributors

- **CHOUKRI Oualid**: [GitHub Profile](https://github.com/oualidch11)
- **ENNAKHAI Mounir**: [GitHub Profile](https://github.com/MounirEnnakhai)
- **RADOUANE Ilias**: [GitHub Profile](https://github.com/Iliasrad0)
- **TOUMI Fadwa**: [GitHub Profile](https://github.com/Fadwa2mi)
- **ZBAIR Aya**: [GitHub Profile](https://github.com/Z-Aya)
