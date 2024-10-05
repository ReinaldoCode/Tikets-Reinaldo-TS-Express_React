export type User = {
  user_id: string;
  name: string;
  email: string;
  password: string;
  role: 'user' | 'admin';
  created_date: Date;
  updated_date: Date;
  is_active: boolean;
};

export type NewUserInput = Pick<User, 'email' | 'name' | 'password'>;

export type UpdatedUserInput = {
  updatedName: string;
  updatedEmail: string;
  updatedPassword: string;
  updatedRole: 'user' | 'admin';
  updatedIs_active: boolean;
};
