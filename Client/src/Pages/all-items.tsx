import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ItmesContainer, SearchContainer } from '../components';
import { createContext, useContext, useState } from 'react';
import { FiltersType } from '../types/items';

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
  const data = useLoaderData() as [];
  const [filters, showFilter] = useState<FiltersType>({
    search: '',
    status: 'ALL',
    condition: 'ALL',
  });
  return (
    <AllItemsContext.Provider value={{ data, filters, showFilter }}>
      <SearchContainer />
      <ItmesContainer />
    </AllItemsContext.Provider>
  );
};
export const useAllItemsContext = () => useContext(AllItemsContext);
