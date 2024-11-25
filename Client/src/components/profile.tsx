import { User } from '../types';
import Wrapper from '../wrappers/itmes';
import { ItemInfo } from './item-info';

export const ProfileData = ({ name, role, email }: User) => {
  return (
    <Wrapper>
      <header>
        <div className='main-icon'>{name.charAt(0)}</div>
        <div className='info'>
          <h5>{name}</h5>
        </div>
      </header>
      <div className='content'>
        <div className='content-center'>
          <ItemInfo text={`Email: ${email}`} />
          <ItemInfo text={`Role: ${role}`} />
        </div>
      </div>
    </Wrapper>
  );
};
