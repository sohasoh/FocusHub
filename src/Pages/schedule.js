import React from 'react'
import './schedule.css'
import { Link } from 'react-router-dom';
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import bluelogo from '../bluelogo.svg';
import Sidebar from '../Components/Sidebar' 


const schedule = () => {
  return (
    <div className='sch'>
      <Sidebar />
      <div className='calplan'>
        <div className='schnav'>
          <Link to='/home'><img src={bluelogo} className="sch-logo" alt="logo" /></Link>
          <IoIosNotifications size='40px' />
          <BsThreeDotsVertical size='30px'/>
        </div>
        <section className='Sched'>
          <div className='plan'>
            
          </div>
          <div className='calenda'>
            
          </div>
        </section>
      </div>
    </div>
  )
}

export default schedule
