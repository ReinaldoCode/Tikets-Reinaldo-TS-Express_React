import axios from 'axios';
import { ActionFunction, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

export const actionDelete: ActionFunction = async ({ params }) => {
  try {
    await axios.delete(`/api/v1/inventory/${params.id}`);
    toast.success('Item Deleted');
    return redirect('/dashboard/all-items');
  } catch (error: any) {
    toast.error(error.response.data.msg);
    return redirect('/dashboard/all-items');
  }
};
