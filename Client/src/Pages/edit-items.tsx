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
import { FormRow, FormRowSelect } from '../components';
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
  console.log(data);
  try {
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

  const isSubmitting = navigatio.state === 'submitting';
  return (
    <Wrapper>
      <Form method='patch' className='form'>
        <h4 className='form-title'>edit item</h4>
        <div className='form-center'>
          <FormRow
            type='text'
            name='updatedAssigned_to'
            lableText='assigned_to'
            defaultValue={data.assigned_to as string}
          />
          <FormRow
            type='text'
            name='updatedLocation'
            lableText='location'
            defaultValue={data.location}
          />

          <FormRowSelect
            name='updatedStatus'
            lableText='status'
            defaultValue={data.status}
            list={Object.values(ITEM_STATUS)}
          />
          <FormRowSelect
            name='updatedCondition'
            lableText='condition'
            defaultValue={data.condition}
            list={Object.values(ITEM_CONDITION)}
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
