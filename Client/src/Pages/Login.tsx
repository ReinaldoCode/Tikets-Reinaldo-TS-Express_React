import { FormRow } from '../components'
import Wrapper from '../wrappers/LoginPage';

export const Login: React.FC = () => {
  return <Wrapper>
    <form className='form'>
      <h4>Login</h4>
      <FormRow type='email' name='email' lableText='email' defaultValue='test@gmail.com'/>
      <FormRow type='password' name='password' lableText='password' defaultValue='1234'/>
      <button type='submit' className='btn btn-block'>Submit</button>
    </form>
  </Wrapper>;
};
