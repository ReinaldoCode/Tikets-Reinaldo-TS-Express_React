import { useDashboardContext } from '../pages';
import Wrapper from '../wrappers/big-sidebar';
import { NavLinksBig } from './nav-link-big';

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
          <NavLinksBig />
        </div>
      </div>
    </Wrapper>
  );
};
