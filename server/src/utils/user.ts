import { UpdatedUserInput, User } from '../types/user';
import { hashPassword, validPassword } from './password';

export const getNewUserData = async (
  name: string,
  email: string,
  password: string,
  first: number,
) => {
  const hased = await hashPassword(password);
  const created_date = new Date();
  const updated_date = created_date;
  let role = '';
  first === 0 ? (role = 'admin') : (role = 'user');
  const values = [name, email, hased, role, created_date, updated_date];
  return values;
};

export const updateUserData = async (
  update: UpdatedUserInput,
  user: User,
  id: string,
) => {
  const {
    updatedName = user.name,
    updatedEmail = user.email,
    updatedRole = user.role,
    updatedIs_active = user.is_active,
    updatedPassword,
  } = update;

  let passwordToStore = user.password;
  if (
    updatedPassword &&
    !(await validPassword(updatedPassword, user.password))
  ) {
    passwordToStore = await hashPassword(updatedPassword);
  }

  const updatedDate = new Date();

  const values = [
    updatedName,
    updatedEmail,
    passwordToStore,
    updatedRole,
    updatedDate,
    updatedIs_active,
    id,
  ];

  return values;
};
