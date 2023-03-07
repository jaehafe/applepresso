import React from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import InitPage from './pages/InitPage/InitPage';
import Login from './pages/Login/Login';
import Signup from './pages/Singup/Signup';
import MainNav from './components/MainNav/MainNav';

const Layout = () => {
  return (
    <>
      <Outlet />
      <MainNav />
    </>
  );
};

const router = createBrowserRouter([
  { path: '/', element: <InitPage /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  {
    path: '/main',
    element: <Layout />,
    children: [{ path: '/main/home', element: <Home /> }],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
