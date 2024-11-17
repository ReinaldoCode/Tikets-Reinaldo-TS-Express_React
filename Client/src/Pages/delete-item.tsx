import axios from 'axios';
import { ActionFunction, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

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
