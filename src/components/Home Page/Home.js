// import React from 'react'
// import { useNavigate } from 'react-router-dom';
// import "./style.css";

// const Home = () => {

//     const history=useNavigate();
//   return (
//     <>
//         <div className='room'>
//             <button onClick={()=>history('/roomstatus')} className='roomStatus'>Check room status</button><br></br>
//             <button onClick={()=>history('/bookroom')} className='bookRoom'>Book Room</button>
//         </div>
//     </>
//   )
// }

// export default Home

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const Home = () => {
  const history = useNavigate();

  return (
    <div className="container">
      <h1 className="title1">Experience the new way of Hostel allocation system</h1>
      <div className="button-container">
        <button onClick={() => history('/roomstatus')} className="btn room-status">
          Check Room Status
        </button>
        <button onClick={() => history('/bookroom')} className="btn book-room">
          Book Room
        </button>
      </div>
      <img
        className="image"
        src="https://images.unsplash.com/photo-1520277739336-7bf67edfa768?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
        alt="Hotel Room"
      />
    </div>
  );
};

export default Home;
