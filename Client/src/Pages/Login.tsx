import {
  ActionFunction,
  Form,
  redirect,
  useNavigation,
  useActionData,
} from 'react-router-dom';
import { FormRowEdit } from '../components';
import Wrapper from '../wrappers/login-page';
import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ErrorMsg } from '../types';

export const LoginAction: ActionFunction = async ({ request }) => {
  const fromData = await request.formData();
  const data = Object.fromEntries(fromData) as {
    email: string;
    password: string;
  };
  const errors: ErrorMsg = { msg: '' };
  try {
    await axios.post('/api/v1/auth/login', data);
    toast.success('Login successful');
    return redirect('/dashboard');
  } catch (error: any) {
    // toast.error(error.response.data.msg);
    errors.msg = error?.response?.data?.msg;
    return errors;
  }
};

export const Login: React.FC = () => {
  const navigation = useNavigation();
  const errors = useActionData() as ErrorMsg;
  const isSubmitting = navigation.state === 'submitting';
  return (
    <Wrapper>
      <Form className='form' method='post'>
        <h4>Login</h4>
        {errors?.msg && <p style={{ color: 'red' }}>{errors.msg}</p>}
        <FormRowEdit
          type='email'
          name='email'
          lableText='email'
          defaultValue='reinaldo@gmail.com'
        />
        <FormRowEdit
          type='password'
          name='password'
          lableText='password'
          defaultValue='1234'
        />
        <button type='submit' className='btn btn-block' disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </Form>
    </Wrapper>
  );
};
