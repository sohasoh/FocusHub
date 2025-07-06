import './creatacc.css';
import { Link } from 'react-router-dom';

import React from 'react'

const creatacc = () => {
  return (
    <div className='create'>
      <p className='up'>Sign-Up</p>
      <div className='inpute'>
        <div className='log'>
          <input type='text' name='Name' placeholder='Enter your name' required />
        </div>
        <div className='log'>
          <input type='text' name='Surname' placeholder='Enter your Sure-name' required />
        </div> 
        <div className='log'>
          <input type='Tel' name='Phone' placeholder='tel' required />
        </div> 
        <div className='log'>
          <input type='email' name='Email' placeholder='Enter your Email' required />
        </div>
        <div className='log'>
          <input type='password' name='Password' placeholder='Password' required />
        </div>
        <div className='log'>
          <input type='password' name='ConfirmPassword' placeholder='Confirm Password' required />
        </div>
        <div className='valid'>
          <Link to='/Home'>
            <input type='submit' className='submit' value='Sign Up' />
          </Link>
        </div>
      </div>
    </div>                    
  )
}

export default creatacc
