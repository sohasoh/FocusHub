import React from 'react'
import './schedule.css'
import { Link } from 'react-router-dom';
import bluelogo from '../bluelogo.svg';
import Sidebar from '../Components/Sidebar' 


const schedule = () => {
  return (
    <div className='sch'>
      <Sidebar />
      <div className='ho'>
        <div className='calplan'>
          <div className='schnav'>
            <Link to='/home'><img src={bluelogo} className="sch-logo" alt="logo" /></Link>
          </div>
          <section className='Sched'>
            <div className='plan'>
              <div className='schedules'>
                <div className='board1'></div>
                <div className='board2'></div>
              </div>
            </div>
            <div className='calenda'>
              silas
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default schedule
