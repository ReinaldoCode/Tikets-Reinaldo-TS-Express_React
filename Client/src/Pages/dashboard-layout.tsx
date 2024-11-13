import { Outlet } from 'react-router-dom';
import Wrapper from '../wrappers/Dashboard';
import { BigSidebar, Navbar, SmallSidebar } from '../components';
import { createContext, useContext, useState } from 'react';
import { DashboardContextProps } from '../types';
import { checkDefaultTheme } from '../App';

const DashboardContext = createContext<DashboardContextProps>(
  {} as DashboardContextProps
);

export const DashboardLayout: React.FC = () => {
  const user = { name: '' };
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
  const logoutUser = () => {};

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
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);
