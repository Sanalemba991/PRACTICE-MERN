import mongoose from "mongoose";

import validator from "validator";

const reservationSchema=new mongoose.Schema({
    firstName:{
        type:String,
        require:true,
        miniLength:[3,"First name mus contain at least 3 characters!"],
        maxLength:[30,"First name cannot exceed 30 character"],
    },
    lastName:{
        type:String,
        require:true,
        miniLength:[3,"First name mus contain at least 3 characters!"],
        maxLength:[30,"First name cannot exceed 30 character"],
    },

    email:{
        type:String,
        require:true,
        validate:[validator.isEmail,"provide a valid Email"]
    },
    phone:{
        type:String,
        require:true,
        miniLength:[11,"Phone number mus contain!"],
        maxLength:[11,"Last  number cannot exceed 30 character"],
        
    },
    time:{
        type:String,
        require:true,
      
        
    },
    date:{
        type:String,
        require:true,
        
    },
})

export const Reservation =mongoose.model("Reservation",reservationSchema)