import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import InitPage from './pages/InitPage/InitPage';
import Login from './pages/Login/Login';

const router = createBrowserRouter([
  { path: '/', element: <InitPage /> },
  { path: '/login', element: <Login /> },
  // { path: '/signup', element: <SignUp /> },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
