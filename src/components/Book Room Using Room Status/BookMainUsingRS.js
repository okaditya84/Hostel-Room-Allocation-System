// import React from 'react'
// import { useNavigate } from 'react-router-dom'

// const BookMain = () => {

//     const history=useNavigate();

//   return (
//       <>
//         <div className='room'>
//             <button onClick={()=>history('/bookroomforrandom')} className='roomStatus'>Book Room with Random roomate</button><br></br>
//             <button onClick={()=>history('/bookroomwithfriend')} className='bookRoom'>Book Room with Friend</button>
//         </div>
//       </>
//   )
// }

// export default BookMain

import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import "./bookmain.css";

const BookMainUsingRS = () => {
  const history = useNavigate();
  const paramsData=useParams().idOfRoomAndRoomNo;
  var id=paramsData.split("&")[0];
  var roomNo=paramsData.split("&")[1];

  return (
    <div className='container'>
      <h1>Book a Room</h1>
      <div className='options'>
        <button onClick={() => history(`/roomStatus/random/${paramsData}`)} className='random'>Book Room with Random Roommate</button>
      </div>
      <div className='options'>
        <button onClick={() => history(`/roomStatus/friend/${paramsData}`)} className='friend'>Book Room with Friend</button>
      </div>
    </div>
  )
}


export default BookMainUsingRS;
