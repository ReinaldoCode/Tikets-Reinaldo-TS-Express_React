type Status = 'IN USE' | 'IN STORAGE' | 'REPAIRED' | 'DISPOSED';
type Condition = 'NEW' | 'GOOD' | 'FAIR' | 'POOR';
export type ItemsT = {
  equipment_id: number;
  equipment_type: string;
  brand: string;
  model: string;
  serial_number: string;
  purchase_date: string;
  price: number;
  status: Status;
  user_id: string;
  assigned_to: string | null;
  location: string;
  warranty_expiry: string;
  condition: Condition;
  buy_from: string;
};
export type ItemsType = {
  data: {
    items: ItemsT[];
    pagination: {
      limit: number;
      offset: number;
      pages: number;
      total: number;
    };
  };
  setPagination: ({}) => any;
  filters: FiltersType;
  setFilters: (filters: {
    search: string;
    status: Status | 'All';
    condition: Condition | 'All';
  }) => void;
};

export type ItemI = {
  text: string;
};

export type FiltersType = {
  search: string;
  status: Status | 'ALL';
  condition: Condition | 'ALL';
};
type Month = {
  monthName: string;
  monthNumber: number;
  price?: number;
  itemsAmaunt?: number;
};

export type MonthlyData = {
  year: number;
  months: Month[];
};
export type DeleteElementProps = {
  onCancel: () => void;
  equipment_id: number;
};
