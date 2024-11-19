import { FiltersType, ItemsT } from '../types/items';

export const filterData = (data: ItemsT[], filters: FiltersType) => {
  const filteredData = data.filter((item: ItemsT) => {
    if (!item.assigned_to) {
      item.assigned_to = '';
    }
    const matchesSearch =
      filters.search === '' ||
      item.equipment_type
        .toLowerCase()
        .includes(filters.search.toLowerCase()) ||
      item.brand.toLowerCase().includes(filters.search.toLowerCase()) ||
      item.serial_number.toLowerCase().includes(filters.search.toLowerCase()) ||
      item.model.toLowerCase().includes(filters.search.toLowerCase()) ||
      item.location.toLowerCase().includes(filters.search.toLowerCase()) ||
      item.assigned_to.toLowerCase().includes(filters.search.toLowerCase()) ||
      item.buy_from
        .toLowerCase()
        .includes(filters.search.toLocaleLowerCase()) ||
      item.serial_number.toLowerCase().includes(filters.search.toLowerCase());

    const matchesStatus =
      filters.status === 'ALL' || item.status === filters.status;

    const matchesCondition =
      filters.condition === 'ALL' || item.condition === filters.condition;

    return matchesSearch && matchesStatus && matchesCondition;
  });
  return filteredData;
};
