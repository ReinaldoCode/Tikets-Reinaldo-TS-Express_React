import { useDashboardContext } from '../pages';
import Wrapper from '../wrappers/big-sidebar';

import { NavLinks } from './nav-link';
export const BigSidebar: React.FC = () => {
  const { showSidebar } = useDashboardContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className='content'>
          <header>
            <h3>Inventory</h3>
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};
