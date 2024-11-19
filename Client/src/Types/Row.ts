export type Row = {
  type: string;
  name: string;
  lableText: string;
  defaultValue?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type RowSelect = {
  name: string;
  lableText: string;
  defaultValue?: string;
  list: string[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};
