import React from 'react'
import './chatbar.css'
import { Link } from "react-router-dom"
import { RiTeamFill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";

const messagebar = () => {
  return (
    <div className='mesage'>
      <div className='teamsearch'>
        <input type='search' placeholder='Search Team'></input>
        <button><IoSearch color='#19469A' size='20px'/></button>
      </div>
      <section className='createteam'>
        <RiTeamFill size='50px' color='white'/>
        <Link className='iconclique'>Click to Create Team</Link>

      </section>
    </div>
  )
}

export default messagebar

