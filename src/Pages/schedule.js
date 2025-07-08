import React from 'react'
import './schedule.css'
import { Link } from 'react-router-dom';
import bluelogo from '../bluelogo.svg';
import Sidebar from '../Components/Sidebar' 

const schedule = () => {
  return (
    <div className='sch'>
      <Sidebar />
      <div>
        <Link to='/home'><img src={bluelogo} className="team-logo" alt="logo" /></Link>
      </div>
    </div>
  )
}

export default schedule
