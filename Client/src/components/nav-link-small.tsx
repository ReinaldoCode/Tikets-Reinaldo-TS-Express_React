import { useDashboardContext } from '../pages';
import { links } from '../utils/links';
import { NavLink } from 'react-router-dom';
import { LinkType } from '../types';

export const NavLinksSmall = () => {
  const { toggleSidebar } = useDashboardContext();
  return (
    <div className='nav-links'>
      {links.map((link: LinkType) => {
        const { text, path, icon } = link;
        return (
          <NavLink
            to={path}
            key={text}
            className='nav-link'
            onClick={toggleSidebar}
            end
          >
            <span className='icon'>{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};
