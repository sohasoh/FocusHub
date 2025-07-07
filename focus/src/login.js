import { Link } from 'react-router-dom'
import './login'
const login = () => {
  return (
    <div className="login">
      <p className="top">Login</p>
      <div className="inpute">
        <div className="go">
          <input type="email" name="Email" placeholder="Enter your Email" required />
        </div>
        <div className="go">
          <input type="password" name="Password" placeholder="Password" required />
        </div>
        <div className="valid">
          <Link to="/home"></Link><input type="submit" className="submit" value="Login" />
        </div>
      </div>
    </div>
  )
}

export default login
