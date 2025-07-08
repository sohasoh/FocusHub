import React from 'react'
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { MdMessage } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { AiFillWechat } from "react-icons/ai";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";

const Sidebar = () => {

  return (
    <div className='container'>
      <div className='profileimg'>
        <Link to='/profile'><FaUserCircle size='40px' color='black'/> </Link>
      </div>
      <div className='pagelink'>
        <Link to='/home'><FaHome size='20px' color='black'/>Home </Link>
      </div>
      <div className='pagelink'>
        <Link to='/chat'><MdMessage size='20px' color='black'/>My Chat </Link>
      </div>
      <div className='pagelink'>
        <Link to='/team'><RiTeamFill size='20px' color='black'/>Teams </Link>
      </div>
      <div className='pagelink'>
        <Link to='/aichat'><AiFillWechat size='20px' color='black'/>AI Chat </Link>
      </div>
      <div className='pagelink'>
        <Link to='/schedule'><RiCalendarScheduleFill size='20px' color='black'/>Schedule </Link>
      </div>

    </div>
  )
}

export default Sidebar
