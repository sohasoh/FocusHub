import './home.css'
import bluelogo from '../bluelogo.svg';
import { Link } from 'react-router-dom';

const home = () => {
  return (
    <div>
        <header className='head'>
            <img src={bluelogo} className="App-logo" alt="logo" />
            <nav className='menu'>
                <ul>
                    <li><Link onToggle="#">Home</Link></li>
                    <li><Link to="#">My Chat</Link></li>
                    <li><Link to="#">Team</Link></li>
                    <li><Link to="#">Ai Chat</Link></li>
                    <li><Link to="#">Schedule</Link></li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default home
