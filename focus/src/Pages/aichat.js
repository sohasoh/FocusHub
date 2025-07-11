import React from 'react'
import './aichat.css'
import Aichatbar from '../Components/aichatbar'
import { Link } from 'react-router-dom';
import bluelogo from '../bluelogo.svg';
import Sidebar from '../Components/Sidebar'
import Text from '../Components/Text'

const aichat = () => {
  return (
    <div>
      <div className='ai'>
        <Sidebar />
        <div className='me'>
          <div className='hi'>
            <div className='sideai'>
              <Link to="/"><img src={bluelogo} className="team-logo" alt="logo" /></Link>
            </div>
            <section className='aichatsec'>
              <Aichatbar/>
              <Text />
            </section>
          </div>
        </div>
        
      </div>
    </div>
    
  )
}

export default aichat
