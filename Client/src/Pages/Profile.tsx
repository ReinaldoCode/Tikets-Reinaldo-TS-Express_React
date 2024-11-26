import axios from 'axios';
import { LoaderFunction, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createContext, useContext } from 'react';
import { ProfileContainer } from '../components';
import { UserArray } from '../types';

export const loaderProfile: LoaderFunction = async () => {
  try {
    const { data } = await axios.get('/api/v1/users/current-user');
    return data;
  } catch (error: any) {
    toast.error(error.response.data.msg);
  }
};

const profileContext = createContext({});

export const Profile = () => {
  const data = useLoaderData() as UserArray;
  const user = data[0];

  return (
    <profileContext.Provider value={{ user }}>
      <ProfileContainer />
    </profileContext.Provider>
  );
};
export const useProfileContext = () => useContext(profileContext);
