import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import "./style.css"
import img1 from './icons8-4-star-hotel-50.png'

const Navbar = () =>{

  const history=useNavigate();
  const [isNavExpanded, setIsNavExpanded] = React.useState(false);
//   console.log("status"+localStorage.getItem("user"));
//   const [logIn,setLogIn]=useState(localStorage.getItem("user"));

//   useEffect(()=>{
//     setLogIn(localStorage.getItem("user"));
//   },[]);

  return (
    <>
      <nav className="navigation">
      <NavLink to='/' style={{textDecoration:'none'}}>
      
        <p className="brand-name">
        <img style={{height:"30px",width:"30px",marginLeft:"10px"}} src={img1} alt=""></img>
          {/* <span className="material-symbols-outlined">event</span> */}
          Room Allocation
        </p>
      </NavLink>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from Heroicons.com */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 25" stroke-width="2" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="none" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li onClick={()=>{history('/home')}} >
            <NavLink to="/home">
              <p>Home</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              <p>About us</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <p>Contact us</p>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
    </>
  )
}

export default Navbar;