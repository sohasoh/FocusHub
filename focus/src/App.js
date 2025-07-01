import './App.css';

function App() {
  return (
     <div className='Login'>
      <p>Sign-Up</p>
      <div className='inpute'>
      <div className='log'>
        <input type='Name' name='Name' placeholder='Enter your name' required></input>
      </div>
      <div className='log'>
        <input type='surename' name='Name' placeholder='Enter your Sure-name' required></input>
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
        <a href='App.js'><button type='submit'>Submit</button></a>
        
      </div>
      </div>
     
    </div>
  );
}

export default App;
