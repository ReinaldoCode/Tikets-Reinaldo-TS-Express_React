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
  Admin,
  LoginAction,
  AddItemAction,
  loaderDashboard,
  loaderAllItmes,
  EditItems,
  actionEdit,
  loaderEdit,
  actionDelete,
} from './pages';

export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem('darkTheme') === 'true';
  document.body.classList.toggle('dark-theme', isDarkTheme);
  return isDarkTheme.toString();
};

checkDefaultTheme();

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
        action: LoginAction,
      },
      {
        path: '/dashboard',
        element: <DashboardLayout />,
        loader: loaderDashboard,
        children: [
          {
            index: true,
            element: <AddItems />,
            action: AddItemAction,
          },
          {
            path: 'stats',
            element: <Stats />,
          },
          {
            path: 'all-items',
            element: <AllItems />,
            loader: loaderAllItmes,
          },
          {
            path: 'profile',
            element: <Profile />,
          },
          {
            path: 'admin',
            element: <Admin />,
          },
          {
            path: 'edit-item/:id',
            element: <EditItems />,
            action: actionEdit,
            loader: loaderEdit,
          },
          {
            path: 'delete-item/:id',
            action: actionDelete,
          },
        ],
      },
    ],
  },
]);

export const App: React.FC = () => {
  return <RouterProvider router={router} />;
};
