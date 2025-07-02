import './App.css';
import bluelogo from './bluelogo.svg';

function App() {
  return (
    <div className="Head">
      <header className="Nav">
        <img src={bluelogo} className="App-logo" alt="logo" />
        <div className='connect'>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            <input type='button'>Create Account</input>
          </a>
          <a
            className="login"
            href="login.js"
            target="_blank"
            rel="noopener noreferrer">
            <input type='button'>Login</input>
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
