import { useState } from 'react';
import { useDashboardContext } from '../pages';
import Wrapper from '../wrappers/LogoutContainer';
import { FaCaretDown, FaUserCircle } from 'react-icons/fa';
export const LogoutContainer = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user, logoutUser } = useDashboardContext();
  return (
    <Wrapper>
      <button
        type="button"
        className="btn logout-btn"
        onClick={() => setShowLogout(!showLogout)}
      >
        <FaUserCircle/>
        {user?.name}
        <FaCaretDown/>
      </button>
      <div className={showLogout? 'dropdown show-dropdown' : 'dropdown'}>
        <button type='button' className='dropdown-btn' onClick={logoutUser}>
          logout
        </button>
      </div>
    </Wrapper>
  );
};
