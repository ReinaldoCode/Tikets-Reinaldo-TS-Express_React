import { ReactElement } from 'react';

export type LinkType = {
  text: string;
  path: string;
  icon: ReactElement;
};
export type Edit = {
  id: number | string;
  link: string;
};
