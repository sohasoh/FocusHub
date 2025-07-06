import './login.css';
function Login() {
  return ( 
<div className='Login'>
      <p className='up'>Sign-Up</p>
      <div className='inpute'>
        <div className='log'>
          <input type='Name' name='Name' placeholder='Enter your name' required></input>
        </div>
        <div className='log'>
          <input type='surename' name='Name' placeholder='Enter your Sure-name' required></input>
        </div> 
         <div className='log'>
          <input type='number' name='Name' placeholder='tel' required></input>
        </div> 
        <div className='log'>
          <input type='Email' name='Name' placeholder='Enter your Email' required></input>
        </div>
        <div className='log'>
          <input type='Password' name='Name' placeholder='Password' required></input>
        </div>
        <div className='log'>
          <input type='password' name='Name' placeholder='Confirm Password' required></input>
        </div>
        <div className='valid'>
          <a href='App.js'><input type='submit' className='submit'></input></a>
        </div>
      </div>
     
    </div>
    );
}

export default Login;