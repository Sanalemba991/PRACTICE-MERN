import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"],
        minlength: [3, "First name must contain at least 3 characters"],
        maxlength: [30, "First name cannot exceed 30 characters"],
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"],
        minlength: [9, "Last name must contain at least 9 characters"],
        maxlength: [30, "Last name cannot exceed 30 characters"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: [validator.isEmail, "Provide a valid email"],
    },
    phone: {
        type: String,
        required: [true, "Phone number is required"],
        minlength: [10, "Phone number must contain at least 11 characters"],
        maxlength: [10, "Phone number cannot exceed 11 characters"],
    },
    time: {
        type: String,
        required: [true, "Time is required"],
    },
    date: {
        type: String,
        required: [true, "Date is required"],
    },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);
