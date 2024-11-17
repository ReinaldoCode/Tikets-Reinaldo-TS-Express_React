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
  data: ItemsT[];
};

export type ItemI = {
  text: string;
};
