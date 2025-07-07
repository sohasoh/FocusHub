import { Link } from 'react-router-dom'
import './login.css'
const login = () => {
  return (
    <div className='now'>
      <div className="login">
        <p className="top">Login</p>
        <div className="inputes">
          <div className="go">
            <input type="email" name="Email" placeholder="Enter your Email" required />
          </div>
          <div className="go">
            <input type="password" name="Password" placeholder="Password" required />
          </div>
          <Link to="/create" className="forgot">Create Account</Link>
          <div className="valid">
            <Link to="/home"><input type="submit" className="yes" value="Login" /></Link>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default login
