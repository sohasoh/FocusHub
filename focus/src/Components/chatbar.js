import React from 'react'
import './chatbar.css'
import { Link } from "react-router-dom"
import { MdMessage } from "react-icons/md";
import { IoSearch } from "react-icons/io5";

const messagebar = () => {
  return (
    <div className='mesage'>
      <div className='teamsearch'>
        <input type='search' placeholder='Search Team'></input>
        <button><IoSearch color='#F8971C' size='20px'/></button>
      </div>
      <section className='createteam'>
        <MdMessage size='50px' color='white'/>
        <Link className='iconclique'>Add Contact</Link>

      </section>
    </div>
  )
}

export default messagebar

