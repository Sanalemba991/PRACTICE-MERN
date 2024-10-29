import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { dbConnection } from './database/dbConnection.js';
import { errorMiddleware } from './middlewares/error.js';
import reservationRouter from './route/reservationRoute.js';

const app = express();

// Load environment variables from config file
dotenv.config({ path: './config/config.env' });

// Connect to the database
dbConnection();

// CORS configuration
app.use(cors({
    origin: [process.env.FRONTEND_URL], // Ensure this environment variable is set
    methods: ["POST"],
    credentials: true,
}));

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route for reservations
app.use('/api/v1/reservation', reservationRouter);

// Use error middleware after defining routes
app.use(errorMiddleware);

export default app;