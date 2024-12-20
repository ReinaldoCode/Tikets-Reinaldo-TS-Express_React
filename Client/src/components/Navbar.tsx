import { useDashboardContext } from '../pages';
import Wrapper from '../wrappers/navbar';
import { FaAlignLeft } from 'react-icons/fa';
import { LogoutContainer } from './logout-container';
import { ThemeToggle } from './theme-toggle';
export const Navbar = () => {
  const { toggleSidebar } = useDashboardContext();
  return (
    <Wrapper>
      <div className='nav-center'>
        <button type='button' className='toggle-btn' onClick={toggleSidebar}>
          <FaAlignLeft></FaAlignLeft>
        </button>
        <div>
          <h4 className='logo-text'>Dashboard</h4>
        </div>
        <div className='btn-container'>
          <ThemeToggle />
          <LogoutContainer />
        </div>
      </div>
    </Wrapper>
  );
};
