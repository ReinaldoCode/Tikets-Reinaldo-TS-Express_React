import { Form } from 'react-router-dom';
import Wrapper from '../wrappers/dashboard-form-page';
import { FormRow } from './form-row';
import { FormRowSelect } from './from-row-select';
import { ITEM_CONDITION_SERCH, ITEM_STATUS_SERCH } from '../utils/content';

export const SearchContainer = () => {
  return (
    <Wrapper>
      <Form className='form'>
        <div className='form-center'>
          <FormRow
            type='search'
            name='search'
            defaultValue=''
            lableText='search'
          />
          <FormRowSelect
            name='status'
            lableText='status'
            defaultValue={ITEM_STATUS_SERCH.All}
            list={Object.values(ITEM_STATUS_SERCH)}
          />
          <FormRowSelect
            name='condition'
            lableText='condition'
            defaultValue={ITEM_CONDITION_SERCH.All}
            list={Object.values(ITEM_CONDITION_SERCH)}
          />
        </div>
      </Form>
    </Wrapper>
  );
};
