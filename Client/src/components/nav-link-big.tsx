import { links } from '../utils/links';
import { NavLink } from 'react-router-dom';
import { LinkType } from '../types';

export const NavLinksBig = () => {
  return (
    <div className='nav-links'>
      {links.map((link: LinkType) => {
        const { text, path, icon } = link;
        return (
          <NavLink to={path} key={text} className='nav-link' end>
            <span className='icon'>{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};
