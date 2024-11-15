import {
  ActionFunction,
  Form,
  redirect,
  useNavigation,
  useOutletContext,
} from 'react-router-dom';
import { UserData } from '../types/user';
import Wrapper from '../wrappers/dashboard-form-page';

import { ITEM_CONDITION, ITEM_STATUS } from '../utils/content';
import { FormRow, FormRowSelect } from '../components';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ErrorResponse } from '../types';

export const AddItemAction: ActionFunction = async ({ request }) => {
  const fromData = await request.formData();
  const data = Object.fromEntries(fromData);
  // as {
  //   equipment_type: string;
  //   brand: string;
  //   model: string;
  //   serial_number: string;
  //   purchase_date: string;
  //   price: string;
  //   status: string;
  //   user_id: string;
  //   assigned_to: string;
  //   location: string;
  //   warranty_expiry: string;
  //   condition: string;
  //   buy_from: string;
  // };
  console.log(data);
  try {
    await axios.post('/api/v1/inventory', data), toast.success('Item added');
    return redirect('all-items');
  } catch (error: any) {
    console.log(error);
    toast.error(error.response.data.msg);
    return redirect('/dashboard');
  }
};

export const AddItems = () => {
  const user: UserData = useOutletContext();
  const userData = user?.userData;
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <Wrapper>
      <Form method='post' className='form'>
        <h4 className='form-title'>Add Item</h4>
        <div className='form-center'>
          <FormRow
            type='text'
            name='equipment_type'
            lableText='equipment'
            defaultValue=''
          />
          <FormRow type='text' name='brand' lableText='brand' defaultValue='' />
          <FormRow type='text' name='model' lableText='model' defaultValue='' />
          <FormRow
            type='text'
            name='serial_number'
            lableText='serial_number'
            defaultValue=''
          />
          <FormRow
            type='text'
            name='purchase_date'
            lableText='purchase_date (MM/DD/YY)'
            defaultValue=''
          />
          <FormRow type='text' name='price' lableText='price' defaultValue='' />
          <FormRow
            type='text'
            name='assigned_to'
            lableText='assigned_to'
            defaultValue=''
          />
          <FormRow
            type='text'
            name='location'
            lableText='location'
            defaultValue=''
          />
          <FormRow
            type='text'
            name='warranty_expiry'
            lableText='warranty_expiry (MM/DD/YY)'
            defaultValue=''
          />
          <FormRow
            type='text'
            name='buy_from'
            lableText='buy_from'
            defaultValue=''
          />

          <FormRowSelect
            name='status'
            lableText='status'
            defaultValue={ITEM_STATUS.IN_USE}
            list={Object.values(ITEM_STATUS)}
          />
          <FormRowSelect
            name='condition'
            lableText='condition'
            defaultValue={ITEM_CONDITION.NEW}
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
