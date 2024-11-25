import axios from 'axios';
import Wrapper from '../wrappers/stats-container';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { toast } from 'react-toastify';
import { useLoaderData } from 'react-router-dom';
import { MonthlyData } from '../types/items';

export const loaderStats = async () => {
  try {
    const { data } = await axios.get('/api/v1/inventory/stats');
    console.log(data);
    return data;
  } catch (error: any) {
    toast.error(error.response.data.msg);
  }
};

export const Stats = () => {
  const data = useLoaderData() as MonthlyData;
  return (
    <Wrapper>
      <div className='container' style={{ height: 400 }}>
        <h4 style={{ paddingLeft: 100, paddingBottom: 10 }}>
          {data.year} Data
        </h4>
        <ResponsiveContainer>
          <BarChart data={data.months}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='monthName' />
            <YAxis />
            <Tooltip />
            <Bar name='Total expeded:' dataKey='price' fill='#625ae8' />
            <Bar name='Total of Items:' dataKey='itemsAmaunt' fill='#383367' />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Wrapper>
  );
};
