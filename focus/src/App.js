import './App.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
// import App from './App'; // Removed to avoid naming conflict
import Welcome from './Pages/welcome';
import Home from './Pages/home';
import Login from './login';
import Creatacc from './Pages/creatacc';
import Schedule from './Pages/schedule';
import Team from './Pages/team';
import Chat from './Pages/chat';
import Aichat from './Pages/aichat';
import {Route,createBrowserRouter,createRoutesFromElements, RouterProvider} from 'react-router-dom';
const router = createBrowserRouter(
  createRoutesFromElements(
    <React.Fragment>
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/creatacc" element={<Creatacc />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/team" element={<Team />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/aichat" element={<Aichat />} />
    </React.Fragment>
  )
);
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


const App = () => {
  return <RouterProvider router={router} />;
}

export default App

