import { useProfileContext } from '../pages';
import { Profile, User } from '../types';
import Wrapper from '../wrappers/itmes-container';
import { ProfileData } from './profile';

export const ProfileContainer = () => {
  const data = useProfileContext() as Profile;
  const user = data.user;
  return (
    <Wrapper>
      <div className='jobs'>
        <ProfileData key={user.user_id} {...user} />
      </div>
    </Wrapper>
  );
};
