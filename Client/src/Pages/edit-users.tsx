import {
  ActionFunction,
  Form,
  LoaderFunction,
  redirect,
  useLoaderData,
  useNavigation,
} from 'react-router-dom';
import Wrapper from '../wrappers/dashboard-form-page';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FormRowEdit } from '../components';
import { User } from '../types';

export const loaderEditUser: LoaderFunction = async ({ params }) => {
  try {
    const { data } = await axios.get(`/api/v1/users/${params.id}`);
    return data[0];
  } catch (error: any) {
    toast.error(error.response.data.msg);
    return redirect('/dashboard/admin');
  }
};

export const actionEditUser: ActionFunction = async ({ request, params }) => {
  const fromData = await request.formData();
  const data = Object.fromEntries(fromData);
  try {
    await axios.patch(`/api/v1/users/static/update/${params.id}`, data);
    toast.success('User has ben updated');
    return redirect('/dashboard/admin');
  } catch (error: any) {
    toast.error(error.response.data.msg);
    return redirect('/dashboard/admin');
  }
};

export const EditUser = () => {
  const data = useLoaderData() as User;
  const navigatio = useNavigation();

  const isSubmitting = navigatio.state === 'submitting';
  return (
    <Wrapper>
      <Form method='patch' className='form'>
        <h4 className='form-title'>edit user</h4>
        <div className='form-center'>
          <FormRowEdit
            type='text'
            name='updatedName'
            lableText='name'
            defaultValue={data.name}
          />
          <FormRowEdit
            type='text'
            name='updatedEmail'
            lableText='email'
            defaultValue={data.email}
          />
          <FormRowEdit
            type='text'
            name='updatedRole'
            lableText='role'
            defaultValue={data.role}
          />
          <FormRowEdit
            type='text'
            name='updatedIs_active'
            lableText='is_active'
            defaultValue={data.is_active as string}
          />
          <FormRowEdit
            type='text'
            name='updatedPassword'
            lableText='password'
            defaultValue={undefined}
          />

          <button
            type='submit'
            className='btn btn-block form-btn'
            disabled={isSubmitting}
          >
            {isSubmitting ? 'submittiong' : 'submit'}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};
