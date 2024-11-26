import { useUsersContext } from '../pages/admint';
import { User, UserArray } from '../types';

import Wrapper from '../wrappers/itmes-container';

import { UsersData } from './users';

export const UsersContainer = () => {
  const data = useUsersContext() as UserArray;
  console.log(data);
  return (
    <Wrapper>
      <div className='jobs'>
        {data.map((users: User) => {
          return <UsersData key={users.user_id} {...users} />;
        })}
      </div>
    </Wrapper>
  );
};
