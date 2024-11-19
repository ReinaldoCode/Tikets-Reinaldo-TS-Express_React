import { Outlet, redirect, useLoaderData, useNavigate } from 'react-router-dom';
import Wrapper from '../wrappers/dashboard';
import { BigSidebar, Navbar, SmallSidebar } from '../components';
import { createContext, useContext, useState } from 'react';
import { DashboardContextProps, User } from '../types';
import { checkDefaultTheme } from '../App';
import axios from 'axios';
import { toast } from 'react-toastify';

export const loaderDashboard = async () => {
  try {
    const { data } = await axios.get('/api/v1/users/current-user');

    return data[0] as User;
  } catch (error) {
    return redirect('/');
  }
};

const DashboardContext = createContext<DashboardContextProps>(
  {} as DashboardContextProps
);

export const DashboardLayout: React.FC = () => {
  const userData = useLoaderData() as User;
  const user = { name: userData?.name, role: userData?.role };
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme);

  const toggleDarkTheme = () => {
    var newDarkTheme = isDarkTheme;
    newDarkTheme === 'false'
      ? (newDarkTheme = 'true')
      : (newDarkTheme = 'false');
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('darkTheme', newDarkTheme);
  };
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const logoutUser = async () => {
    navigate('/');
    await axios.get('/api/v1/auth/logout');
    toast.success('Loggin out');
  };

  return (
    <DashboardContext.Provider
      value={{
        user,
        showSidebar,
        isDarkTheme,
        toggleDarkTheme,
        toggleSidebar,
        logoutUser,
      }}
    >
      <Wrapper>
        <main className='dashboard'>
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className='dashboard-page'>
              <Outlet context={{ userData }} />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);
