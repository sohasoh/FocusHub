import './home.css'
import bluelogo from '../bluelogo.svg';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const home = () => {
  return (
    <div>
        <header className='head'>
            <Link to="/welcome"><img src={bluelogo} className="App-logo" alt="logo" /></Link>
            <nav className='menue'>
                <ul>
                  <li><Link to="/home"><FaHome /> Home</Link></li>
                  <li><Link to="/team">Team</Link></li>
                  <li><Link to="/chat">Chat</Link></li>
                  <li><Link to="/aichat">AI Chat</Link></li>
                  <li><Link to="/schedule">Schedule</Link></li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default home
