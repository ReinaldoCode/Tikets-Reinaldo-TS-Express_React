import axios from 'axios';
import { LoaderFunction, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ItmesContainer, SearchContainer } from '../components';
import { createContext, useContext, useState } from 'react';
import { FiltersType } from '../types/items';

export const loaderAllItmes: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const offset = url.searchParams.get('offset') || '0';
  const limit = url.searchParams.get('limit') || '10';

  try {
    const { data } = await axios.get(
      `/api/v1/inventory?offset=${offset}&limit=${limit}`
    );
    return data;
  } catch (error: any) {
    toast.error(error.response.data.msg);
    return null;
  }
};

const AllItemsContext = createContext({});

export const AllItems = () => {
  const data = useLoaderData() as [];
  const [pagination, setPagination] = useState({
    limit: 10,
    offset: 0,
  });

  const [filters, showFilter] = useState<FiltersType>({
    search: '',
    status: 'ALL',
    condition: 'ALL',
  });

  return (
    <AllItemsContext.Provider
      value={{ data, filters, showFilter, pagination, setPagination }}
    >
      <SearchContainer />
      <ItmesContainer />
    </AllItemsContext.Provider>
  );
};

export const useAllItemsContext = () => useContext(AllItemsContext);
