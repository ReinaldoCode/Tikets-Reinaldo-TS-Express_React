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

export const loaderStats = async () => {
  return null;
};

export const Stats = () => {
  const data = {
    year: 2024,
    months: [
      {
        monthName: 'January',
        monthNumber: 1,
        montTotal: 10.5,
        monthTotalItems: 4,
      },
      {
        monthName: 'February',
        monthNumber: 2,
        montTotal: 10.52,
        monthTotalItems: 4,
      },
      {
        monthName: 'March',
        monthNumber: 3,
        montTotal: 10.52,
        monthTotalItems: 4,
      },
      {
        monthName: 'April',
        monthNumber: 4,
        montTotal: 10.52,
        monthTotalItems: 4,
      },
      {
        monthName: 'May',
        monthNumber: 5,
        montTotal: 10.52,
        monthTotalItems: 4,
      },
      {
        monthName: 'June',
        monthNumber: 6,
        montTotal: 10.52,
        monthTotalItems: 4,
      },
      {
        monthName: 'July',
        monthNumber: 7,
        montTotal: 10.52,
        monthTotalItems: 4,
      },
      {
        monthName: 'August',
        monthNumber: 8,
        montTotal: 10.52,
        monthTotalItems: 4,
      },
      {
        monthName: 'September',
        monthNumber: 9,
        montTotal: 534,
        monthTotalItems: 4,
      },
      {
        monthName: 'October',
        monthNumber: 10,
        montTotal: 500.5,
        monthTotalItems: 65,
      },
      {
        monthName: 'November',
        monthNumber: 11,
        montTotal: 111.04,
        monthTotalItems: 23,
      },
      {
        monthName: 'December',
        monthNumber: 12,
        montTotal: 75,
        monthTotalItems: 6,
      },
    ],
  };

  const data2 = {
    years: [
      {
        year: 2023,
        yearTotal: 10.5,
        yearTotalItems: 4,
      },
      {
        year: 2024,
        yearTotal: 10.5,
        yearTotalItems: 4,
      },
      {
        year: 2025,
        yearTotal: 10.5,
        yearTotalItems: 4,
      },
      {
        year: 2026,
        yearTotal: 10.5,
        yearTotalItems: 4,
      },
      {
        year: 2027,
        yearTotal: 10.5,
        yearTotalItems: 4,
      },
      {
        year: 2028,
        yearTotal: 10.5,
        yearTotalItems: 4,
      },
      {
        year: 2029,
        yearTotal: 10.5,
        yearTotalItems: 4,
      },
    ],
  };

  return (
    <Wrapper>
      <div className='container' style={{ height: 400 }}>
        <h4 style={{ paddingLeft: 100, paddingBottom: 10 }}>
          Chart in {data.year}
        </h4>
        <ResponsiveContainer>
          <BarChart data={data.months}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='monthName' />
            <YAxis />
            <Tooltip />
            <Bar name='Total expeded:' dataKey='montTotal' fill='#625ae8' />
            <Bar
              name='Total of Items:'
              dataKey='monthTotalItems'
              fill='#383367'
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className='container' style={{ height: 400 }}>
        <h4 style={{ paddingLeft: 100, paddingBottom: 10 }}>Chart by Years</h4>
        <ResponsiveContainer>
          <BarChart data={data2.years}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='year' />
            <YAxis />
            <Tooltip />
            <Bar name='Total expeded:' dataKey='yearTotal' fill='#625ae8' />
            <Bar
              name='Total of Items:'
              dataKey='yearTotalItems'
              fill='#383367'
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Wrapper>
  );
};
