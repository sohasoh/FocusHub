import React from 'react'
import './aichat.css'
import { Link } from 'react-router-dom';
import bluelogo from '../bluelogo.svg';
import Sidebar from '../Components/Sidebar'

const aichat = () => {
  return (
    <div className='ai'>
      <Sidebar />
      <div>
        <Link to="/"><img src={bluelogo} className="team-logo" alt="logo" /></Link>
      </div>
    </div>
  )
}

export default aichat
