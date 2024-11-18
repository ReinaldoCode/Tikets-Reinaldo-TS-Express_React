import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ItmesContainer, SearchContainer } from '../components';
import { createContext, useContext } from 'react';

export const loaderAllItmes = async () => {
  try {
    const { data } = await axios.get('/api/v1/inventory');
    return data;
  } catch (error: any) {
    toast.error(error.response.data.msg);
  }
};

const AllItemsContext = createContext({});

export const AllItems = () => {
  const data = useLoaderData();

  return (
    <AllItemsContext.Provider value={{ data }}>
      <SearchContainer />
      <ItmesContainer />
    </AllItemsContext.Provider>
  );
};
export const useAllItemsContext = () => useContext(AllItemsContext);
