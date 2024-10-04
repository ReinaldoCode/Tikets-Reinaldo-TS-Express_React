import { isUUID } from 'validator';
import { NewUserInput, UpdatedUserInput, User } from '../models/user';
import { hassingPassword } from './password';


export const getNewUserData = async (user: NewUserInput, first: number) => {
  const { name, email, password } = user;
  const hased = await hassingPassword(password)
  if (!name || !email || !password) {
    throw Error(
      'Please complete the user information as follow user_id: string name: string email: string password: string',
    );
  }
  const created_date = new Date();
  const updated_date = created_date;
  var role = '';
  first === 0 ? (role = 'admin') : (role = 'user');
  const values = [name, email, hased, role, created_date, updated_date];
  console.log(values);
  return values;
};
export const validateID = (id: string) => {
  return isUUID(id);
};
export const updateUserData = (
  update: UpdatedUserInput,
  user: User,
  id: string,
) => {
  var {
    updatedName,
    updatedEmail,
    updatedPassword,
    updatedRole,
    updatedIs_active,
  } = update;
  const { name, email, password, role, is_active } = user;
  updatedName == name || !updatedName ? (updatedName = name) : updatedName;
  updatedEmail == email || !updatedEmail
    ? (updatedEmail = email)
    : updatedEmail;
  updatedPassword == password || !updatedPassword
    ? (updatedPassword = password)
    : updatedPassword;
  updatedRole == role || !updatedRole ? (updatedRole = role) : updatedRole;
  updatedIs_active == is_active || !updatedIs_active
    ? (updatedIs_active = is_active)
    : updatedIs_active;
  const updated_date = new Date();
  const values = [
    updatedName,
    updatedEmail,
    updatedPassword,
    updatedRole,
    updated_date,
    updatedIs_active,
    id,
  ];

  return values;
};
