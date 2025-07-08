import './team.css'
import bluelogo from '../bluelogo.svg';
import Sidebar from '../Components/Sidebar' 
import { Link } from 'react-router-dom';

const team = () => {
  return (
    <div>
      <div className='team'>
        <Sidebar />
        <div className='hey'>
          <Link to='/home'><img src={bluelogo} className="team-logo" alt="logo" /></Link>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default team
