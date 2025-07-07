import React from 'react'
import { Link } from 'react-router-dom';
import white from '../white.png';  

const footer = () => {
  return (
    <footer>
        <div className='footer-content'>
          <div className='plate'>
            <img src={white} alt="FocusHub Logo" className='other' />
            <span>FocusHub is a platform that helps you to create teams and schedules for better productivity.</span>
            <button className='hero-button5'>Download</button>
          </div>
          <div className='foot'>
            <p>What we do</p>
            <ul>
              <li><Link to="/chat">Chat</Link></li>
              <li><Link to="/team">Team</Link></li>
              <li><Link to="/aichat">AI Chat</Link></li>
              <li><Link to="/schedule">Schedule</Link></li>
            </ul>
          </div>
           <div className='foot'>
            <p>Need help?</p>
            <ul>
              <li><Link to="/chat">Contact Us</Link></li>
              <li><Link to="/team">Help Center</Link></li>
            </ul>
          </div>
        </div>
        <p>© 2023 FocusHub. All rights reserved.</p>
      </footer>
  )
}

export default footer
