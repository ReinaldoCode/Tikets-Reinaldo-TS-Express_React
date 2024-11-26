import { FaEdit } from 'react-icons/fa';
import { User } from '../types';
import Wrapper from '../wrappers/itmes';

import { ItemInfo } from './item-info';

export const UsersData = ({ name, role, email, is_active, user_id }: User) => {
  return (
    <Wrapper>
      <header>
        <div className='main-icon'>{name.charAt(0)}</div>
        <div className='info'>
          <h5>{name}</h5>
          <button className='btn delete-btn c-btn'>
            <FaEdit className='new-icon' />
          </button>
        </div>
      </header>
      <div className='content'>
        <div className='content-center'>
          <ItemInfo text={`Email: ${email}`} />
          <ItemInfo text={`Role: ${role}`} />
          <ItemInfo text={`Active: ${is_active}`} />
        </div>
      </div>
    </Wrapper>
  );
};
