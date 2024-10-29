import mongoose from "mongoose";

export const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            dbName: "RESTURANT",
            useNewUrlParser: true,  // Recommended option
            useUnifiedTopology: true, // Recommended option
        });
        console.log("Connected to MongoDB database");
    } catch (err) {
        console.error(`Error connecting to the database: ${err.message}`);
        process.exit(1); // Exit the process if connection fails
    }
};