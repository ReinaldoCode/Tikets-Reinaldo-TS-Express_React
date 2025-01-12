import { MonthlyData } from '../types/inventory';

export const expensesByMonth = () => {
  const year = new Date().getFullYear();
  const month = Array.from({ length: 12 }, (_, i) => {
    const date = new Date(new Date().getFullYear(), i);
    return {
      monthName: date.toLocaleString('default', { month: 'long' }),
      monthNumber: i + 1,
    };
  });
  return { year, month } as MonthlyData;
};

export const expensesByYear = () => {};
