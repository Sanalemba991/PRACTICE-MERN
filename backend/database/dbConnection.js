import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URL, {
        dbName: "RESTURANT",
   
    })
    .then(() => {
        console.log("Connected to database MONGODB");
    })
    .catch(err => {
        console.log(`Error: ${err.message}`);
    });
};
