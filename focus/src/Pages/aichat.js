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
      <div className='sideai'>
        <div>
          <Link to="/"><img src={bluelogo} className="team-logo" alt="logo" /></Link>
        </div>
        <section className='aichatsec'>
          <Aichatbar/>
        </section>
      </div>
    </div>
  )
}

export default aichat
