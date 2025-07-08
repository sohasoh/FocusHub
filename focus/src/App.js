import './App.css';
import React from 'react';
import Welcome from './Pages/welcome';
import Login from './login';
import Home from './Pages/home';
import Team from './Pages/team';
import Chat from './Pages/chat';
import Aichat from './Pages/aichat';
import Schedule from './Pages/schedule';
import Create from './Pages/create';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <React.Fragment>
      <Route index element={<Welcome />} />
      <Route path='/login' element={<Login />} />
      <Route path='/home' element={<Home />} />
      <Route path='/team' element={<Team />} />
      <Route path='/chat' element={<Chat />} />
      <Route path='/aichat' element={<Aichat />} />
      <Route path='/schedule' element={<Schedule />} />
      <Route path='/create' element={<Create />} />
    </React.Fragment>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App;

