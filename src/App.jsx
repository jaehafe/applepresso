import React from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import InitPage from './pages/InitPage/InitPage';
import Login from './pages/Login/Login';
import Signup from './pages/Singup/Signup';
import MainNav from './components/MainNav/MainNav';
import Order from './pages/Order/Order';
import CoffeeMenu from './pages/CoffeeMenu/CoffeeMenu';
import MenuHeader from './components/MenuHeader/MenuHeader';
import * as S from './App.style';

const Layout = () => {
  return (
    <S.Container>
      <Outlet />
      <MainNav />
    </S.Container>
  );
};

const OrderLayout = () => {
  return (
    <S.Container>
      <MenuHeader />
      <Outlet />
    </S.Container>
  );
};

const router = createBrowserRouter([
  { path: '/', element: <InitPage /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  {
    path: '/main',
    element: <Layout />,
    children: [
      { path: '/main/home', element: <Home /> },
      {
        // index: true,
        element: <OrderLayout />,
        children: [
          {
            path: '/main/home/order',
            element: <Order />,
          },
        ],
      },
    ],
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
