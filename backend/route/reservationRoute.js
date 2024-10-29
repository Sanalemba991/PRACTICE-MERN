import express from 'express';
import { sendReservation } from '../controller/reservation.js';

const router = express.Router();

// Route to send reservation
router.post('/send', async (req, res, next) => {
    try {
        await sendReservation(req, res, next);
    } catch (error) {
        next(error); // Pass any errors to the error handling middleware
    }
});

export default router;