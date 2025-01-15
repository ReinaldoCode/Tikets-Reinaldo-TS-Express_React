import axios from 'axios';
import {
  LoaderFunction,
  redirect,
  useLoaderData,
  useNavigation,
} from 'react-router-dom';
import { toast } from 'react-toastify';
import Wrapper from '../wrappers/dashboard-form-page';
import { Form, ActionFunction } from 'react-router-dom';
import { FormRowEdit, FormRowSelect } from '../components';
import { ITEM_CONDITION, ITEM_STATUS } from '../utils/content';
import { ItemsT } from '../types/items';

export const loaderEdit: LoaderFunction = async ({ params }) => {
  try {
    const { data } = await axios.get(`/api/v1/inventory/${params.id}`);

    return data[0];
  } catch (error: any) {
    toast.error(error.response.data.msg);
    return redirect('/dashboard/all-items');
  }
};

export const actionEdit: ActionFunction = async ({ request, params }) => {
  const fromData = await request.formData();
  const data = Object.fromEntries(fromData);
  try {
    const userData = await axios.get('/api/v1/users/current-user');
    const role = userData.data[0].role;
    if (role === 'user') {
      toast.error('Need admin permitions');
      return redirect('/dashboard/all-items');
    }
    await axios.patch(`/api/v1/inventory/${params.id}`, data);

    toast.success('Item has been updated');
    return redirect('/dashboard/all-items');
  } catch (error: any) {
    toast.error(error.response.data.msg);
    return redirect('/dashboard/all-items');
  }
};
export const EditItems = () => {
  const data = useLoaderData() as ItemsT;
  const navigatio = useNavigation();
  console.log(data);
  const isSubmitting = navigatio.state === 'submitting';
  return (
    <Wrapper>
      <Form method='patch' className='form'>
        <h4 className='form-title'>edit item</h4>
        <div className='form-center'>
          <FormRowEdit
            type='text'
            name='updatedEquipment'
            lableText='equipment_type'
            defaultValue={data.equipment_type as string}
          />
          <FormRowEdit
            type='text'
            name='updatedAssigned_to'
            lableText='assigned_to'
            defaultValue={data.assigned_to as string}
          />
          <FormRowEdit
            type='text'
            name='updatedLocation'
            lableText='location'
            defaultValue={data.location}
          />

          <FormRowEdit
            type='text'
            name='updatedStatus'
            lableText='status'
            defaultValue={data.status}
            // list={Object.values(ITEM_STATUS)}
          />
          <FormRowEdit
            type='text'
            name='updatedCondition'
            lableText='condition'
            defaultValue={data.condition}
            // list={Object.values(ITEM_CONDITION)}
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
