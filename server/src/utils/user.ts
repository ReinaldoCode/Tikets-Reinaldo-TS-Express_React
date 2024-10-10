import { isUUID } from 'validator';
import { UpdatedUserInput, User } from '../models/user';
import { hashPassword, validPassword } from './password';


export const getNewUserData = async (name:string, email:string, password:string,  first: number) => {
    const hased = await hashPassword(password);
    const created_date = new Date();
    const updated_date = created_date;
    let role = '';
    first === 0 ? (role = 'admin') : (role = 'user');
    const values = [name, email, hased, role, created_date, updated_date];
    return values;
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
  const hassed = await hashPassword(updatedPassword);
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
