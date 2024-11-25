import {
  Link,
  Form,
  ActionFunction,
  redirect,
  useNavigation,
  useActionData,
} from 'react-router-dom';

import { FormRowEdit } from '../components';
import Wrapper from '../wrappers/login-page';
import { ErrorMsg } from '../types';
import axios from 'axios';
import { toast } from 'react-toastify';

export const registerAction: ActionFunction = async ({ request }) => {
  const fromData = await request.formData();
  const data = Object.fromEntries(fromData) as {
    name: string;
    email: string;
    password: string;
  };
  const errors: ErrorMsg = { msg: '' };
  try {
    await axios.post('/api/v1/auth/register', data);
    toast.success('Register successful');
    return redirect('/login');
  } catch (error: any) {
    errors.msg = error?.response?.data?.msg;
    return errors;
  }
};
export const Register = () => {
  const navigation = useNavigation();
  const errors = useActionData() as ErrorMsg;
  const isSubmitting = navigation.state === 'submitting';
  return (
    <Wrapper>
      <Form method='post' className='form'>
        <h4>Register</h4>
        {errors?.msg && <p style={{ color: 'red' }}>{errors.msg}</p>}
        <FormRowEdit type='text' name='name' defaultValue='' lableText='name' />
        <FormRowEdit
          type='email'
          name='email'
          lableText='email'
          defaultValue=''
        />
        <FormRowEdit
          type='password'
          name='password'
          defaultValue=''
          lableText='password'
        />
        <button type='submit' className='btn btn-block' disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
        <p>
          Already have and account?
          <Link to='/login' className='member-btn'>
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};
