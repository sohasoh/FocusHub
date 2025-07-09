import React from 'react'
import './schedule.css'
import { Link } from 'react-router-dom';
import { IoIosNotifications } from "react-icons/io";
import bluelogo from '../bluelogo.svg';
import Sidebar from '../Components/Sidebar' 

const schedule = () => {
  return (
    <div className='sch'>
      <Sidebar />
      <div>
        <div className='schnav'>
          <Link to='/home'><img src={bluelogo} className="team-logo" alt="logo" /></Link>
          <IoIosNotifications size='60px' />
        </div>
        
      </div>
    </div>
  )
}

export default schedule
