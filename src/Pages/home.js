import './home.css'
import bluelogo from '../bluelogo.svg';
import { FaHome } from 'react-icons/fa';
import { MdMessage } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { AiFillWechat } from "react-icons/ai";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

const home = () => {
  return (
    <div>
        <header className='head'>
            <Link to="/"><img src={bluelogo} className="App-logo" alt="logo" /></Link>
            <nav className='menue'>
                <ul>
                  <li><Link to="/home"><FaHome /> Home</Link></li>
                  <li><Link to="/team"><RiTeamFill />Team</Link></li>
                  <li><Link to="/chat"><MdMessage />Chat</Link></li>
                  <li><Link to="/aichat"><AiFillWechat />AI Chat</Link></li>
                  <li><Link to="/schedule"><RiCalendarScheduleFill />Schedule</Link></li>
                </ul>
            </nav>
            <div className='logout'>
                <Link to="/"><button className='logout-button'>Logout</button></Link>
            </div>
        </header>
    </div>
  )
}

export default home
