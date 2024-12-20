export type User = {
  user_id: string;
  name: string;
  email: string;
  password: string;
  role: 'user' | 'admin';
  created_date: Date;
  updated_date: Date;
  is_active: boolean | string;
};

export type UserData = {
  userData: User;
};
export type Profile = {
  user: User;
};
export type UserArray = User[];
export type UserArraydata = {
  data: User[];
};
