
const login = () => {
  return (
    <div className="login">
      <p className="up">Login</p>
      <div className="inpute">
        <div className="log">
          <input type="email" name="Email" placeholder="Enter your Email" required />
        </div>
        <div className="log">
          <input type="password" name="Password" placeholder="Password" required />
        </div>
        <div className="valid">
          <input type="submit" className="submit" value="Login" />
        </div>
      </div>
    </div>
  )
}

export default login
