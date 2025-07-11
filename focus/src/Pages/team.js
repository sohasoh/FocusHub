import './team.css'
import bluelogo from '../bluelogo.svg';
import Sidebar from '../Components/Sidebar' 
import Teambar from '../Components/teambar';
import { Link } from 'react-router-dom';
import Text from '../Components/Text'

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
            <Teambar />
            <div className='texting'>
              <div className='text'>
                <Text />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default team
