import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import "./style.css";
import axios from "axios";

const BookRoomForRandomUsingRS = () => {
  
  const paramsData=useParams().idOfRoomAndRoomNo;
  var id=paramsData.split("&")[0];
  var roomNo=paramsData.split("&")[1];


  const history = useNavigate();
  const [person,setpersons]=useState();
  const [checker,setChecker]=useState(false);

  const handleChange = (e)=>{
    setpersons((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value
  }));
  // console.log(person);
  }

  const sendRequest = async()=>{
    const res=await axios.post("http://localhost:3000/api/v2/allocateOne",{
      name:String(person.fullName),
      rollNo:String(person.rollNo),
      transactionId:String(person.transId),
      emailId:String(person.emailId),
      phoneNumber:String(person.phoneNumber),
      address:String(person.address),
      id:String(id)
    });

    const data=await res;
    return data;
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    sendRequest().then((res)=>{
    // console.log(res.status);
    if(res.status===200){
      setChecker(false);
      history(`/certificateOne/${res.data.data}`);
    }
    else{
      setChecker(true);
      // console.log(checker);
    }
  });

  
}

  return (
    <>
      <h1 className='composeTitle'>Book Room</h1>
      <div className='composeInput'>
        <form onSubmit={handleSubmit} >
            <p>Full Name</p>
            <input type='text' onChange={handleChange} name='fullName' placeholder='Harsh Mukeshbhai Patel' required></input>
            <p>Roll No</p>
            <input type='text' onChange={handleChange} name='rollNo' placeholder='21BCP001' required></input>
            <p>Email-Id</p>
            <input type='text' onChange={handleChange} name='emailId' placeholder='harsh.bce21@sot.pdpu.ac.in' required></input>
            <p>Tranction Id</p>
            <input type='text' onChange={handleChange} name='transId' placeholder='T10312873291' required></input>
            <p>Room No</p>
            <input type='text' value={roomNo} name='transId' disabled></input>
            <p>Address</p>
            <input type='text' onChange={handleChange} name='address' placeholder='C-110 Rudra Apartment' required></input>
            <p>Phone No</p>
            <input type='text' onChange={handleChange} name='phoneNumber' placeholder='999888999' required></input><br/>
            <button className='composebtn'>Book Room</button>
        </form>
        {checker?
          <p className='error' >Enter correct credential to book room</p>
        :
        null
        }
      </div>
    </>
  )
}

export default BookRoomForRandomUsingRS;