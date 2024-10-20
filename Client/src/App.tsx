import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  DashboardLayout,
  Error,
  HomeLayout,
  Landing,
  Login,
  AddItems,
  Stats,
  AllItems,
  Profile,
  Admin
} from './Pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/dashboard',
        element: <DashboardLayout />,
        children:[
          {
            index:true,
            element:<AddItems/>
          },
          {
            path: 'stats',
            element:<Stats/>
          },
          {
            path: 'all-items',
            element:<AllItems/>
          },
          {
            path: 'profile',
            element:<Profile/>
          },
          {
            path: 'admin',
            element:<Admin/>
          },
        ]
      },
    ],
  },
]);

export const App: React.FC = () => {
  return <RouterProvider router={router} />;
};
