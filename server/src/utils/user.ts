import { UserInput } from '../models/user';

export const getNewUserData = (user: UserInput) => {
  const { name, email, password } = user;

  if (!name || !email || !password) {
    throw Error(
      'Please complete the user information as follow user_id: string name: string email: string password: string',
    );
  }

  const created_date = new Date();
  const updated_date = created_date;
  const role = 'user';

  return {
    name,
    email,
    password,
    role,
    created_date,
    updated_date,
  } as const;
};
