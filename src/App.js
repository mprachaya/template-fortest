import './App.css';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './page/Home';
import { NextUIProvider } from '@nextui-org/react';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);

function App() {
  return (
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  );
}

export default App;
