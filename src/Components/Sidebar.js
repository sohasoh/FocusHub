import './sidebar.css'
import { Link, NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { MdMessage } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { AiFillWechat } from "react-icons/ai";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";

const Sidebar = ({Children}) => {
  const menuItem=[
    {
      path:"/profile",
      name:"Home",
      icon:<FaHome/>
    },
    {
      path:"/chat",
      name:"My Chat",
      icon:<MdMessage/>
    },
    {
      path:"/team",
      name:"Team",
      icon:<RiTeamFill/>
    },
    {
      path:"/aichat",
      name:"AI Chat",
      icon:<AiFillWechat/>
    },
    {
      path:"/Schedule",
      name:"Schedule",
      icon:<RiCalendarScheduleFill/>
    },
  ]

  return (
    <div className='container'>
      <div className='sidebar'>
        <div className='profileimg'>
          <Link to='/profile'><FaUserCircle size='80px' color='white'/> </Link>
          <p>Asoh Silas</p>
        </div>
        {
          menuItem.map((item, index) => (
            <NavLink to={item.path} key={index} className="link" activeClassName="active">
              <div className="icon">{item.icon}</div>
              <div className="link_text">{item.name}</div>
            </NavLink>
          ))
        }
      </div>
      <main>{Children}</main>
    </div>
  )
}

export default Sidebar
