import './App.css';
import React from 'react';
import Welcome from './Pages/welcome';
import Login from './login';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <React.Fragment>
      <Route path='/welcome' element={<Welcome />} />
      <Route index element={<Login />} />
    </React.Fragment>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App;

