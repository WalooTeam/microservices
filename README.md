# IoT Patient Monitoring System

## Description

This platform enables real-time monitoring of patients using IoT sensors to track vital signs such as movement, heart rate, and temperature. Data is processed through a robust microservices architecture to deliver critical alerts to caregivers, ensuring timely and effective healthcare management.

---

## Table of Contents

- [Software Architecture](#software-architecture)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Video Demonstration](#video-demonstration)
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

1. Clone the repository:
   ```bash
   git clone https://github.com/WalooTeam/microservices/edit/main/
   cd iot-patient-monitoring
