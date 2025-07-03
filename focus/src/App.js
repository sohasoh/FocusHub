import './App.css';
import bluelogo from './bluelogo.svg';
import Hero1 from './Hero1.png';
import first from './first.png';
import React from 'react';
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
        <img src={bluelogo} className="App-logo" alt="logo" />
        <nav className='menu'>
          <ul>
            <li><a href="creatacc.css">Create Account</a></li>
            <li><a href="/login.css" className='enter'>Login</a></li>
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
            <button className='hero-button'>Create Account</button>
          </div>
        </div>
      </section>
      <section className='hero2'>
        <div className='heroback2'>
          <div className='hero-text2'>
            <h1>Privacy and Security</h1>
            <p>Simple, reliable, private messaging and calling for free. High security sharing personal information available all over the world.</p>
            <button className='hero-button'>Login</button>
          </div>
          <img src={first} alt="first" className='hero-image2' />
        </div>
      </section>

      <section className='hero3'>

      </section>
    </div>
  );
}

export default App;
