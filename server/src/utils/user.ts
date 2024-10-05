import { isUUID } from 'validator';
import { NewUserInput, UpdatedUserInput, User } from '../models/user';
import { hassingPassword, validPassword } from './password';

export const getNewUserData = async (user: NewUserInput, first: number) => {
  try {
    const { name, email, password } = user;
    const hased = await hassingPassword(password);
    if (!name || !email || !password)
      throw new Error(
        'Please complete the user information as follow user_id: string name: string email: string password: string',
      );

    const created_date = new Date();
    const updated_date = created_date;
    var role = '';
    first === 0 ? (role = 'admin') : (role = 'user');
    const values = [name, email, hased, role, created_date, updated_date];
    return values;
  } catch (error) {
    throw error;
  }
};
export const validateID = (id: string) => {
  return isUUID(id);
};
export const updateUserData = async (
  update: UpdatedUserInput,
  user: User,
  id: string,
) => {
  const {
    updatedName,
    updatedEmail,
    updatedPassword,
    updatedRole,
    updatedIs_active,
  } = update;
  const { name, email, password, role, is_active } = user;
  const valid = await validPassword(updatedPassword, password);
  const hassed = await hassingPassword(updatedPassword);
  const updated_date = new Date();
  const values = [
    updatedName == name || !updatedName ? name : updatedName,
    updatedEmail == email || !updatedEmail ? email : updatedEmail,
    valid || !updatedPassword ? password : hassed,
    updatedRole == role || !updatedRole ? role : updatedRole,
    updated_date,
    updatedIs_active == is_active || !updatedIs_active
      ? is_active
      : updatedIs_active,
    id,
  ];

  return values;
};
