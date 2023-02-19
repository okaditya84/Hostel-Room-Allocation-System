// import React from 'react'
// import { useNavigate } from 'react-router-dom'
// dotslash-svnit-production.up.railway.app
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
import { useNavigate } from 'react-router-dom'
import "./bookmain.css";

const BookMain = () => {
  const history = useNavigate();

  return (
    <div className='container'>
      <h1>Book a Room</h1>
      <div className='options'>
        <button onClick={() => history('/bookroomforrandom')} className='random'>Book Room with Random Roommate</button>
      </div>
      <div className='options'>
        <button onClick={() => history('/bookroomwithfriend')} className='friend'>Book Room with Friend</button>
      </div>
    </div>
  )
}


export default BookMain
