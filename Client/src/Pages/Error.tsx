import { useRouteError, Link } from 'react-router-dom';
import Wrapper from '../wrappers/ErrorPage';
import img from '../assets/error.svg';
import { RouteError } from '../Types';

export const Error: React.FC = () => {
  const error = useRouteError() as RouteError;

  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found" />
          <h3>Page not Found</h3>
          <Link to="/dashboard">Back Home</Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div>
        <h3>Something went wrong</h3>
      </div>
    </Wrapper>
  );
};
