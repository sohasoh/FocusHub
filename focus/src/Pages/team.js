import './team.css'
import bluelogo from '../bluelogo.svg';
import Sidebar from '../Components/Sidebar' 
import Messagebar from '../Components/messagebar';
import { Link } from 'react-router-dom';

const team = () => {
  return (
    <div>
      <div className='team'>
        <Sidebar />
        <div className='hey'>
          <div className='teamhead'>
            <Link to='/home'><img src={bluelogo} className="team-logo" alt="logo" /></Link>
          </div>
          <section className='sidesection'>
            <Messagebar />
            <div className='texting'>
              <div className='text'>
                heos
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default team
