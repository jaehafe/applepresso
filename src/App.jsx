import React from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import * as S from './App.style';

import Home from './pages/Home/Home';
import InitPage from './pages/InitPage/InitPage';
import Login from './pages/Login/Login';
import Signup from './pages/Singup/Signup';
import MainNav from './components/MainNav/MainNav';
import MenuHeader from './components/MenuHeader/MenuHeader';
import Recommend from './pages/Order/Recommend/Recommend';
import SetMenu from './pages/Order/SetMenu/SetMenu';
import CoffeeMenu from './pages/Order/CoffeeMenu/CoffeeMenu';

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
      { path: 'home', element: <Home /> },
      {
        path: 'order',
        element: <OrderLayout />,
        children: [
          {
            path: 'recommend',
            element: <Recommend />,
          },
          {
            path: 'coffee',
            element: <CoffeeMenu />,
          },
          {
            path: 'setMenu',
            element: <SetMenu />,
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
