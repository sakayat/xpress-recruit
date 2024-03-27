# Xpress Recruit

Xpress Recruit is a web application that helps tech job seekers find their ideal job opportunities. The platform provides a curated list of tech jobs, including remote positions, full-time roles, and internships.

## Features

- Browse through a wide range of tech job listings
- Filter jobs by type (remote, full-time, internship)
- View detailed information about each job listing
- Easy-to-use interface for seamless job searching

## Technologies Used

- Frontend: React.js
- Backend: Node.js, Express.js
- Database: JSON Server

## Getting Started

### Installation

1. Clone the repository:

2. Navigate to the project directory:

   ```bash
   cd xpress-recruit
   ```

3. Install the dependencies for both the frontend and backend:

   ```bash
   # Install dependencies
   npm install

### Running the Application

1. Start the frontend development server:

   ```bash
   npm run dev
   ```
   The frontend application will be running at `http://localhost:3000`.

2. Start the backend server:

   ```bash
   npm run server
   ```
   The backend server will be running at `http://localhost:8080`.

3. Access the application in your web browser at `http://localhost:3000`.

## Backend API

The backend server uses JSON Server to provide a RESTful API for the job listings. The API endpoints are as follows:

- `GET /jobs`: Retrieve all job listings
- `GET /jobs/:id`: Retrieve a specific job listing by ID
- `POST /jobs`: Create a new job listing
- `PUT /jobs/:id`: Update a specific job listing by ID
- `DELETE /jobs/:id`: Delete a specific job listing by ID
