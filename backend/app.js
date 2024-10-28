import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { dbConnection } from './database/dbConnection.js';
import { errorMiddleware } from './error/error.js';



const app = express();

// Load environment variables from config file
dotenv.config({ path: './config/config.env' });

// Connect to the database
dbConnection();

// CORS configuration
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
}));

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



dbConnection();
app.use(errorMiddleware)

export default app;
