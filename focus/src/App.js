import './App.css';
import bluelogo from './bluelogo.svg';

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
    </div>
  );
}

export default App;
