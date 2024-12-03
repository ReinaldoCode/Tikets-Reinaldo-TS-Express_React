import axios from 'axios';

import { ActionFunction, Form, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import Wrapper from '../wrappers/dashboard-form-page';
import { DeleteElementProps } from '../types/items';

export const actionDelete: ActionFunction = async ({ params }) => {
  try {
    const { data } = await axios.get('/api/v1/users/current-user');
    const role = data[0].role;
    if (role === 'user') {
      toast.error('Need admin permitions');
      return redirect('/dashboard/all-items');
    }
    await axios.delete(`/api/v1/inventory/${params.id}`);
    toast.success('Item Deleted');
    return redirect('/dashboard/all-items');
  } catch (error: any) {
    toast.error(error.response.data.msg);
    return redirect('/dashboard/all-items');
  }
};

export const DeleteModal = ({ onCancel, equipment_id }: DeleteElementProps) => {
  return (
    <Wrapper>
      <p>Are you sure you want to delete the item?</p>
      <Form method='delete' action={`../delete-item/${equipment_id}`}>
        <button className='btn btn-block form-btn'>submit</button>
      </Form>
      <button className='btn btn-block form-btn' onClick={onCancel}>
        cancel
      </button>
    </Wrapper>
  );
};
