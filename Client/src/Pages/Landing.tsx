import { Link } from 'react-router-dom';
import { Wrapper } from '../wrappers/landing-page';
import main from '../assets/main.svg';

export const Landing = () => {
  return (
    <Wrapper>
      <div className='container page'>
        <div className='info'>
          <h1>
            OCMI <span>Items</span> IT
          </h1>
          <p>
            Welcome Back to Your Inventory! Easily manage and keep track of all
            your available items in one place. Stay organized and always have a
            clear view of what's in stock.
          </p>
          <Link to='/Login' className='btn register-link'>
            Login
          </Link>
        </div>
        <img src={main} alt='It photo' className='img main-img' />
      </div>
    </Wrapper>
  );
};
