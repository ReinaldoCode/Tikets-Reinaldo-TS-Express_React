import {
  ActionFunction,
  Form,
  redirect,
  useNavigation,
} from 'react-router-dom';
import { FormRow } from '../components';
import Wrapper from '../wrappers/login-page';
import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export const action: ActionFunction = async ({ request }) => {
  const fromData = await request.formData();
  const data = Object.fromEntries(fromData) as {
    email: string;
    password: string;
  };
  try {
    await axios.post('/api/v1/user/login', data);
    // localStorage.setItem('jwtToken', token);
    toast.success('Login successful');
    return redirect('/dashboard');
  } catch (error: any) {
    toast.error(error.response.data.msg);
    return error;
  }
};

export const Login: React.FC = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <Wrapper>
      <Form className='form' method='post'>
        <h4>Login</h4>
        <FormRow
          type='email'
          name='email'
          lableText='email'
          defaultValue='test-2@gmail.com'
        />
        <FormRow
          type='password'
          name='password'
          lableText='password'
          defaultValue='123'
        />
        <button type='submit' className='btn btn-block' disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </Form>
    </Wrapper>
  );
};
