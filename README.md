# IoT Patient Monitoring System

## Description

This platform enables real-time monitoring of patients using IoT sensors to track vital signs such as movement, heart rate, and temperature. Data is processed through a robust microservices architecture to deliver critical alerts to caregivers, ensuring timely and effective healthcare management.

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

1. Clone the repository:
   ```bash
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

## Contributors

- **Team Member Name**: [GitHub Profile](https://github.com/oualidch11)
- **Team Member Name**: [GitHub Profile](https://github.com/MounirEnnakhai)
- **Team Member Name**: [GitHub Profile](https://github.com/Iliasrad0)
- **Team Member Name**: [GitHub Profile](https://github.com/Fadwa2mi)
- **Team Member Name**: [GitHub Profile](https://github.com/Z-Aya)
