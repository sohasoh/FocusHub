import React from 'react'
import './chatbar.css'
import { Link } from "react-router-dom"
import { AiFillWechat } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";

const aichatbar = () => {
  return (
    <div className='mesage'>
      <div className='teamsearch'>
        <input type='search' placeholder='Search Team'></input>
        <button><IoSearch color='#F8971C' size='20px'/></button>
      </div>
      <section className='createteam'>
        <AiFillWechat size='50px' color='white'/>
        <Link className='iconclique'>Don't have a chat yet</Link>

      </section>
    </div>
  )
}

export default aichatbar

