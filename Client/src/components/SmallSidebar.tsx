import { useDashboardContext } from '../pages';
import { links } from '../utils/links';
import { Wrapper } from '../wrappers/SmallSidebar';
import { FaTimes } from 'react-icons/fa';
import { LinkType } from '../types';
import { NavLink } from 'react-router-dom';
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
          <div className="nav-links">
            {links.map((link: LinkType) => {
              const { text, path, icon } = link;
              return (
                <NavLink
                  to={path}
                  key={text}
                  className="nav-link"
                  onClick={toggleSidebar}
                  end
                >
                  <span className="icon">{icon}</span>
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
