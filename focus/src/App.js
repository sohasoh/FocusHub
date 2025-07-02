import './App.css';
import bluelogo from './bluelogo.svg';
import Hero1 from './Hero1.png';

function App() {
  return (
    <div className="Head">
      <header className="Nav">
        <img src={bluelogo} className="App-logo" alt="logo" />
        <nav className='menu'>
          <ul>
            <li><a href="creatacc.css">Create Account</a></li>
            <li><a href="/login.css">Login</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero section */}

      <section className='hero'>
        <div className='heroback'>
          <img src={Hero1} alt="Hero" className='hero-image' />
          <div className='hero-text'>
            <h1>Create Team And Schedules For Better Experience !</h1>
            <p>Stay focused, stay productive.</p>
            <button className='hero-button'>Get Started</button>
          </div>
        </div>
        
      </section>
      

    </div>
  );
}

export default App;
