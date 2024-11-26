import axios from 'axios';

import { toast } from 'react-toastify';
import { createContext, useContext } from 'react';
import { LoaderFunction, useLoaderData } from 'react-router-dom';
import { UserArray } from '../types';
import { UsersContainer } from '../components/users-container';

export const loaderUsers: LoaderFunction = async () => {
  try {
    const { data } = await axios.get('/api/v1/users');

    return data;
  } catch (error: any) {
    toast.error(error.response.data.msg);
  }
};

const usersContext = createContext({});

export const Admin = () => {
  const data = useLoaderData() as UserArray;
  return (
    <usersContext.Provider value={data}>
      <UsersContainer />
    </usersContext.Provider>
  );
};
export const useUsersContext = () => useContext(usersContext);
