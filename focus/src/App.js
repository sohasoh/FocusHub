import './App.css';
import bluelogo from './bluelogo.svg';
import Hero1 from './Hero1.png';
import group from './group.png';
import laptop from './laptop.png';
import phone from './phone.png';
import schedule from './schedule.png';
import first from './first.png';
import React from 'react';
import white from './white.png';
import { createRoot } from 'react-dom/client';
// import App from './App'; // Removed to avoid naming conflict
import Login from './login';
import Creatacc from './creatacc';
import Home from './home';
import Schedule from './schedule';
import Team from './team';
import Chat from './chat';
import Aichat from './aichat';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
const router = createBrowserRouter([
  {path: '/',element: <App />},
  {path: '/login',element: <Login />},
  {path: '/creatacc',element: <Creatacc />},
  {path: '/home',element: <Home />},
  {path: '/schedule',element: <Schedule/>},
  {path: '/team',element: <Team />},
  {path: '/chat',element: <Chat />},
  {path: '/aichat',element: <Aichat />},
]);
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

function App() {
  return (
    <div className="Head">
      <header className="Nav">
        <link to="/"><img src={bluelogo} className="App-logo" alt="logo" /></link>
        <nav className='menu'>
          <ul>
            <li><link to="creatacc">Create Account</link></li>
            <li><link to="/login" className='enter'>Login</link></li>
          </ul>
        </nav>
      </header>

      {/* Hero section */}

      <section className='hero'>
        <div className='heroback'>
          <img src={Hero1} alt="Hero" className='hero-image' />
          <div className='hero-text'>
            <h1>Create Team And Schedules For Better Experience !</h1>
            <p>Feel free because we take care of Security for you<br></br>All over the world, meet here today and upgrade</p>
            <button className='hero-button1'>Create Account</button>
          </div>
        </div>
      </section>

       {/* Hero2 section */}

      <section className='hero2'>
        <div className='heroback2'>
          <div className='hero-text2'>
            <h1>Privacy and Security</h1>
            <p>Simple, reliable, private messaging and calling for free. High security sharing personal information available all over the world.</p>
            <button className='hero-button2'>Login</button>
          </div>
          <img src={first} alt="first" className='hero-image2' />
        </div>
      </section>

       {/* Hero3 section */}

      <section className='hero3'>
        <div className='heroback3'>
          <div className='hero-text3'>
            <h2>Team Work With Real Life Screen Sharing</h2>
            <p>Just on one Click</p>
          </div>
          <img src={group} alt="group" className='hero-image3' />
          <button className='key'>Create Team</button>
        </div>
      </section>

       {/* Hero4 section */}

      <section className='hero4'>
        <div className='heroback4'>
          <img src={schedule} alt="schedule" className='hero-image4' />
          <div className='hero-text4'>
            <h2>Schedule and Planning</h2>
            <p>Simple, reliable, private messaging and calling for free. High security sharing personal information available all over the world.</p>
            <button className='hero-button4'>Schedule</button>
          </div>
        </div>
      </section>

      {/* Hero5 section */}

      <section className='hero5'>
        <div className='heroback5'>
           <img src={phone} alt="phone" className='hero-image6' />
          <div className='hero-text5'>
            <h2>Download Focus hub</h2>
            <p>We keep you connected on any device no matter your location. Get a network connection and download help to productivity for free !</p>
            <button className='hero-button'>Download</button>
          </div>
          <img src={laptop} alt="laptop" className='laptop' />
        </div>
      </section>

      <footer className='footer'>
        <div className='footer-content'>
          <div className='plate'>
            <img src={white} alt="FocusHub Logo" className='white' />
            <span>FocusHub is a platform that helps you to create teams and schedules for better productivity.</span>
            <button className='hero-button5'>Download</button>
          </div>
          <div className='foot'>
            <p>What we do</p>
            <ul>
              <li><a href="/chat">Chat</a></li>
              <li><a href="/team">Team</a></li>
              <li><a href="/aichat">AI Chat</a></li>
              <li><a href="/schedule">Schedule</a></li>
            </ul>
          </div>
           <div className='foot'>

            <p>Need help?</p>
            <ul>
              <li><link href="/chat">Contact Us</link></li>
              <li><link href="/team">Help Center</link></li>
            </ul>
          </div>
        </div>
        <p>© 2023 FocusHub. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
