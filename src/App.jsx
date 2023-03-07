import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import InitPage from './pages/InitPage/InitPage';
import Login from './pages/Login/Login';
import Signup from './pages/Singup/Signup';

const router = createBrowserRouter([
  { path: '/', element: <InitPage /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  { path: '/home', element: <Home /> },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
