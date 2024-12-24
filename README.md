# AltametricTest 

hosted on [localhost:8080](http://localhost:8080)

**AltametricTest** is a full-stack web application for managing invoices using React (Vite) for the frontend, NestJS for the backend, and PostgreSQL for database management. The application has user authentication and can view and delete invoices in a paginated table.

---

## Table of Contents

- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Localhost and Ports](#localhost-and-ports)
- [Backend](#backend)

---


## Technologies Used

- **Frontend:** React, Vite, TailwindCSS
- **Backend:** NestJS, Prisma ORM, PostgreSQL
- **Containerization:** Docker, Docker Compose
- **Authentication:** JWT-based login system

---

## Setup

To set up the project locally:

### Prerequisites

- Docker and Docker Compose installed on your machine.
- Node.js and npm for local development.

### Clone

1. Clone:
    ```bash
    git clone https://github.com/ColbyKure/AltametricTest.git
    ```

2. Navigate into the project directory:
    ```bash
    cd AltametricTest
    ```

### Set Up Backend and Frontend

1. **Backend Setup:**
   - Go to the `backend` folder:
     ```bash
     cd backend
     ```

   - Install dependencies:
     ```bash
     npm install
     ```

2. **Frontend Setup:**
   - Go to the `frontend` folder:
     ```bash
     cd ../frontend
     ```

   - Install dependencies:
     ```bash
     npm install
     ```

### Run with Docker Compose

1. Start the front and back end services independently from each folder:
    ```bash
    docker-compose up --build
    ```

1. Run migrations and build frontend if needed

---

## Localhost and Ports

Once the application is running, you can access the following:

- **Frontend (React):** [http://localhost:8080](http://localhost:8080)  
- **Backend (NestJS API):** [http://localhost:5000](http://localhost:5000)  
- **Database (PostgreSQL):** Accessible on port `5432` within the Docker network, or [localhost:5432](localhost:5432) (for local access)  

---

## Backend

The backend API is built with **NestJS** and uses **Prisma ORM** to interact with a **PostgreSQL** database. It supports:

- **User Authentication:** Users can sign in with email and password using JWT for secure authentication.
- **Invoice Management:** Users can create, read, update, and delete invoices related to restaurant chains.

The backend service listens on port `5000` and connects to a **PostgreSQL** database running in Docker, which handles all data storage, including invoice details for restaurant chains.

---
