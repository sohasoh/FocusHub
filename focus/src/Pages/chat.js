import React from 'react'
import './chat.css'
import bluelogo from '../bluelogo.svg';
import {Link} from 'react-router-dom';
import Sidebar from '../Components/Sidebar' 

const chat = () => {
  return (
    <div className='cha'>
      <Sidebar />
      <div>
        <Link to='/home'><img src={bluelogo} className="team-logo" alt="logo" /></Link>
      </div>
    </div>
  )
}

export default chat
