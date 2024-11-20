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
  LoginAction,
  AddItemAction,
  loaderDashboard,
  loaderAllItmes,
  EditItems,
  actionEdit,
  loaderEdit,
  actionDelete,
  loaderProfile,
  loaderStats,
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
            loader: loaderStats,
          },
          {
            path: 'all-items',
            element: <AllItems />,
            loader: loaderAllItmes,
          },
          {
            path: 'profile',
            element: <Profile />,
            loader: loaderProfile,
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
