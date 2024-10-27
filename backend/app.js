import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
dotenv.config({ path: './config/config.env' });

app.use(cors()); // Don't forget to use CORS if needed

export default app;
