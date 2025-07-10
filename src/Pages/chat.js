import React from 'react'
import './chat.css'
import bluelogo from '../bluelogo.svg';
import Messagebar from '../Components/messagebar'
import {Link} from 'react-router-dom';
import Sidebar from '../Components/Sidebar' 

const chat = () => {
  return (
    <div className='cha'>
      <Sidebar />
      <div className='hey'>
        <div className='chathead'>
          <Link to='/home'><img src={bluelogo} className="team-logo" alt="logo" /></Link>
        </div>
        <section className='chatsection'>
        <Messagebar/>
        <div>
          heo
        </div>
      </section>
      </div>
    </div>
  )
}

export default chat
