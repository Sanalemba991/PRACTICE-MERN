import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";

export const sendReservation = async (req, res, next) => {
    const { firstName, lastName, email, date, phone, time } = req.body;

    // Check for missing fields
    if (!firstName || !lastName || !email || !date || !phone || !time) {
        return next(new ErrorHandler("Please fill out the reservation form completely", 400));
    }

    try {
        // Create a new reservation
        await Reservation.create({ firstName, lastName, email, date, phone, time });
        
        // Respond with success
        res.status(200).json({
            success: true,
            message: "Reservation sent successfully",
        });
    } catch (error) {
        // Handle validation errors
        if (error.name === "ValidationError") {
            const validationErrors = Object.values(error.errors).map(err => err.message);
            return next(new ErrorHandler(validationErrors.join(", "), 400));
        }

        // Handle other errors
        return next(new ErrorHandler("An error occurred while creating the reservation", 500));
    }
};
