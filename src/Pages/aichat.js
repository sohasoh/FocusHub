import React from 'react'
import './aichat.css'
import Aichatbar from '../Components/aichatbar'
import { Link } from 'react-router-dom';
import bluelogo from '../bluelogo.svg';
import Sidebar from '../Components/Sidebar'

const aichat = () => {
  return (
    <div className='ai'>
      <Sidebar />
      <div className='hi'>
        <div className='sideai'>
          <Link to="/"><img src={bluelogo} className="team-logo" alt="logo" /></Link>
        </div>
        <section className='aichatsec'>
          <Aichatbar/>
          <div className='chatspace'>
            hi 
          </div>
        </section>
      </div>
    </div>
  )
}

export default aichat
