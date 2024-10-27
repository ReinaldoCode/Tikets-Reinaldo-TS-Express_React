import { useDashboardContext } from '../pages';

import { Wrapper } from '../wrappers/SmallSidebar';
import { FaTimes } from 'react-icons/fa';


import { NavLinks } from './NavLink';
export const SmallSidebar = () => {
  const { showSidebar, toggleSidebar } = useDashboardContext();

  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className="content">
          <button type="button" className="close-btn" onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <h3>Inventory</h3>
          </header>
          <NavLinks/>
        </div>
      </div>
    </Wrapper>
  );
};
