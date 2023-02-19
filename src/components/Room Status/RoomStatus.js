import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './style.css';

const RoomStatus = () => {

    const history=useNavigate();
    const [roomStatus,setRoomStatus]=useState([]);

    const sendRequest = async()=>{
        const res= await axios.get('http://localhost:3000/api/v1/getAllocatedRooms').catch((err)=>console.log(err));
        const data = await res.data;
        return data; 
    }

    useEffect(()=>{
        sendRequest().then((data)=>{
            // console.log(data);
            setRoomStatus(data);
        });
    },[]);

  return (
    <>
        <p>Red for Occupied Rooms</p>
        <p>Yellow for Partially Vacant Rooms</p>
        <p>Green for Vacant Rooms</p>
        <div className='layout-container'>
            A-Block
            <div className='column1'>
                Ground Floor
                <ul className='room-list'>
                {roomStatus.map((each,index)=>{
                    return (
                        <>
                            {index<10?
                            <>
                                <li className='room-item'>
                                    <div className='room-number'>{ each.roomNo}</div>
                                    <div onClick={ ()=>(
                                        each.personCount===2 ? null : each.personCount===1 ? history(`/roomStatus/random/${each.id}&${each.roomNo}`) : history(`/roomStatus/query/${each.id}&${each.roomNo}`)
                                    )} style={{backgroundColor: each.personCount===2 ? "red" : each.personCount===1 ? "yellow" : "green",height:"20px",width:"30px" }} className='room-status' ></div>
                                </li>
                            </>
                                :
                                null
                                
                                }
                        </>
                    )
                })}
                </ul>
            </div>

            <div className='column2'>
                First Floor
                <ul className='room-list'>
                {roomStatus.map((each,index)=>{
                    return (
                        <>
                            {index>9 && index< 20 ?
                            <>
                                <li className='room-item'>
                                    <div className='room-number'>{ each.roomNo}</div>
                                    <div onClick={ ()=>(
                                        each.personCount===2 ? null : each.personCount===1 ? history(`/roomStatus/random/${each.id}&${each.roomNo}`) : history(`/roomStatus/query/${each.id}&${each.roomNo}`)
                                    )}
                                        style={{backgroundColor: each.personCount===2 ? "red" : each.personCount===1 ? "yellow" : "green",height:"20px",width:"30px" }} className='room-status' ></div>
                                </li>
                            </>
                                :
                                null
                                }
                        </>
                    )
                })}
                </ul>
            </div>
        </div>
    </>
  )
}

export default RoomStatus