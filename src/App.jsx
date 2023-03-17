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
import MilkTeaLatte from './pages/Order/MilkTeaLatte/MilkTeaLatte';
import MenuDetail from './pages/Order/MenuDetail/MenuDetail';
import CartButton from './components/CartButton/CartButton';
import EasyOrder from './pages/EasyOrder/EasyOrder';
import CartPage from './pages/CartPage/CartPage';
import ConfirmOrderPage from './pages/ConfirmOrderPage/ConfirmOrderPage';
import EasyOrderConfirmPage from './pages/EasyOrderConfirmPage/EasyOrderConfirmPage';
import PaymentSuccess from './pages/Payment/PaymentSuccess';
import SelectPayment from './components/SelectPayment/SelectPayment';
import PaymentFail from './pages/Payment/PaymentFail';
import MyPage from './pages/MyPage/MyPage';
import PaymentWaiting from './pages/Payment/PaymentWaiting';
import OrderHistory from './pages/OrderHistory/OrderHistory';

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
      <CartButton />
      <MenuHeader />
      <Outlet />
    </S.Container>
  );
};

const router = createBrowserRouter([
  { path: '/', element: <InitPage /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  { path: '/menuDetail/:id', element: <MenuDetail /> },
  { path: '/cart', element: <CartPage /> },
  { path: '/confirmOrder', element: <ConfirmOrderPage /> },
  { path: '/easyOrderConfirm', element: <EasyOrderConfirmPage /> },
  { path: '/easyOrder', element: <EasyOrder /> },
  { path: '/paymentSuccess', element: <PaymentSuccess /> },
  { path: '/selectPayment', element: <SelectPayment /> },
  { path: '/paymentFail', element: <PaymentFail /> },
  { path: '/paymentWaiting', element: <PaymentWaiting /> },
  { path: '/orderHistory', element: <OrderHistory /> },
  {
    path: '/main',
    element: <Layout />,
    children: [
      { path: 'home', element: <Home /> },
      { path: 'myPage', element: <MyPage /> },
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
          {
            path: 'milkTeaLatte',
            element: <MilkTeaLatte />,
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
