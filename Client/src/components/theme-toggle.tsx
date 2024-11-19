import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { useDashboardContext } from '../pages';
import Wrapper from '../wrappers/theme-toggle';

export const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useDashboardContext();

  return (
    <Wrapper
      onClick={toggleDarkTheme}
      role='button'
      aria-label={`Switch to ${isDarkTheme ? 'light' : 'dark'} mode`}
    >
      {isDarkTheme ? (
        <BsFillSunFill className='toggle-icon' />
      ) : (
        <BsFillMoonFill className='toggle-icon' />
      )}
    </Wrapper>
  );
};
