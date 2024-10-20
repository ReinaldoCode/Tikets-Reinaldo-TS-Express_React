import { Outlet } from 'react-router-dom';
import Wrapper from '../wrappers/Dashboard';
import { BigSidebar, Navbar, SmallSidebar } from '../components';
import { createContext, useState } from 'react';
import { DashboardContextProps } from '../Types';

const DashboardContext = createContext<DashboardContextProps | undefined>(
  undefined
);

export const DashboardLayout: React.FC = () => {
  const user = { name: 'Reinaldo' };
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleDarkTheme = () => {};
  const toggleSidebar = () => {};
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
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};
