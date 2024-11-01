import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Reservation() {
  const [ firstName,setFirstName]=useState("");
  const [ lastName,setLastName]=useState("");
  const [ email,setEmail]=useState("");
  const [ date,serDate]=useState("");
  const [  time,setTime]=useState("");
  const [ phone,setPhone]=useState("");

  const navigate=useState()


  const handleSubmit=async()=>{
    e.preventDefault();
    try{
      const {data}=await axios.post("localhost:5000/api/v1/reservation/send",
        { firstName, lastName, email, phone, date, time },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setFirstName("");
      setLastName("");
      setPhone(0);
      setEmail("");
      setTime("");
      setDate("");
      navigate("/success");
    } 
catch(error){

}
  }
  return (
<section className='reservation' id='reservation'>

</section>
  )
}

export default Reservation
