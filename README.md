# Train Seat Booking System

[Live Demo](https://train-ticket-booking-kappa.vercel.app/)

A full-stack application for managing seat reservations in a train with specific seating arrangement constraints.

## Project Overview

This Train Seat Booking System allows users to book seats in a train with the following specifications:
- 80 seats in a single coach
- 11 rows with 7 seats each
- Last row with 3 seats
- Priority booking in one row when possible
- Nearby seats booking when same-row booking isn't possible
- Maximum 7 seats per booking

## Tech Stack

### Frontend
- React.js
- Vite + JavaScript
- CSS for styling

### Backend
- Node.js
- Express.js
- MongoDB for database

## Features

- User Authentication
  - Registration and Login
  - JWT-based authentication
  - Secure session management

- Seat Management
  - View all seats
  - View available seats
  - Visual representation of seat layout

- Booking System
  - Book up to 7 seats at a time
  - Smart seat allocation algorithm
  - View booking history
  - Cancel bookings

- Security
  - Input validation and sanitization
  - Protected routes
  - Secure password hashing

## Installation and Setup

### Prerequisites
- Node.js (v14+)
- npm or yarn
- MongoDB account

### Backend Setup
1. Clone the repository
   ```
   git clone https://github.com/roonpandit/train-booking-system.git
   cd train-booking-system/backend
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Create a `.env` file in the backend directory with the following variables
   ```
   PORT=5000
   MONGO_URI=your_mongodb_cluster_url
   JWT_SECRET=your_jwt_secret_key_here
   JWT_EXPIRE=30d
   ```

4. Start the backend server
   ```
   npm run dev
   ```

### Frontend Setup
1. Navigate to the frontend directory
   ```
   cd ../frontend
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Create a `.env` file in the frontend directory
   ```
   VITE_API_URL=http://localhost:5000/api
   ```

4. Start the frontend development server
   ```
   npm run dev
   ```

## API Documentation

### Authentication Endpoints

#### Register User
- **URL**: `/api/auth/register`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "123456"
  }
  ```

#### Login User
- **URL**: `/api/auth/login`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "email": "john@example.com",
    "password": "123456"
  }
  ```

#### Get Current User
- **URL**: `/api/auth/me`
- **Method**: `GET`
- **Headers**: `Authorization: Bearer <token>`

### Seat Endpoints

#### Get All Seats
- **URL**: `/api/seats`
- **Method**: `GET`

#### Get Available Seats
- **URL**: `/api/seats/available`
- **Method**: `GET`

#### Initialize Seats (Admin)
- **URL**: `/api/seats/init`
- **Method**: `POST`
- **Headers**: `Authorization: Bearer <token>`

#### Reset Seats (Admin)
- **URL**: `/api/seats/reset`
- **Method**: `POST`
- **Headers**: `Authorization: Bearer <token>`

### Booking Endpoints

#### Book Seats
- **URL**: `/api/booking`
- **Method**: `POST`
- **Headers**: `Authorization: Bearer <token>`
- **Body**:
  ```json
  {
    "numberOfSeats": 3
  }
  ```

#### Get User Bookings
- **URL**: `/api/booking`
- **Method**: `GET`
- **Headers**: `Authorization: Bearer <token>`

#### Cancel Booking
- **URL**: `/api/booking/:id`
- **Method**: `DELETE`
- **Headers**: `Authorization: Bearer <token>`

## Seat Booking Algorithm

The system follows these priorities when booking seats:
1. Attempt to book all requested seats in the same row
2. If not possible, book nearby seats to keep the group as close as possible
3. If not enough seats are available at all, reject the booking request

## Deployment

### Backend Deployment
The backend can be deployed to any Node.js hosting platform:
- Heroku
- Render
- Railway
- AWS EC2

### Frontend Deployment
The frontend can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- AWS S3

## Project Structure

```
train-booking-system/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── .env
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── contexts/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env
│   └── package.json
└── README.md
```

## Testing

To test the application:
1. Register a new user account
2. Log in to obtain JWT token
3. Initialize seats (first-time setup)
4. Attempt to book different numbers of seats
5. View and manage your bookings

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [JWT.io](https://jwt.io/)
