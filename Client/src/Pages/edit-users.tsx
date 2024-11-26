import { Form } from 'react-router-dom';
import Wrapper from '../wrappers/dashboard-form-page';

export const EditUser = () => {
  return (
    <Wrapper>
      <Form method='patch' className='form'></Form>
    </Wrapper>
  );
};
