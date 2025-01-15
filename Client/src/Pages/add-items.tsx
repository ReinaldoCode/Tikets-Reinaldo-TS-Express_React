import {
  ActionFunction,
  Form,
  redirect,
  useNavigation,
} from 'react-router-dom';

import Wrapper from '../wrappers/dashboard-form-page';

import { ITEM_CONDITION, ITEM_STATUS, LOCATION } from '../utils/content';
import { FormRow, FormRowSelect } from '../components';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

export const AddItemAction: ActionFunction = async ({ request }) => {
  const fromData = await request.formData();
  const data = Object.fromEntries(fromData);

  console.log(data);
  try {
    await axios.post('/api/v1/inventory', data), toast.success('Item added');
    return redirect('');
  } catch (error: any) {
    console.log(error);
    toast.error(error.response.data.msg);
    return redirect('');
  }
};

export const AddItems = () => {
  // const user: UserData = useOutletContext();
  // const userData = user?.userData;
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
          <FormRowSelect
            name='location'
            lableText='location'
            defaultValue={LOCATION.DANIA}
            list={Object.values(LOCATION)}
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
          <div className='div-submit-cancel'>
            {' '}
            <button
              type='submit'
              className='btn btn-block form-btn'
              disabled={isSubmitting}
            >
              {isSubmitting ? 'submittiong' : 'submit'}
            </button>
            <Link to='../' className='btn btn-block cancel-btn'>
              Cancel
            </Link>
          </div>
        </div>
      </Form>
    </Wrapper>
  );
};
