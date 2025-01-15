import { IoBarChartSharp } from 'react-icons/io5';
import { MdAdminPanelSettings } from 'react-icons/md';
import { HiOutlineDesktopComputer } from 'react-icons/hi';

import { ImProfile } from 'react-icons/im';
import { LinkType } from '../types';

export const links: LinkType[] = [
  {
    text: 'IT Equipment',
    path: '.',
    icon: <HiOutlineDesktopComputer />,
  },
  {
    text: 'stats',
    path: 'stats',
    icon: <IoBarChartSharp />,
  },
  {
    text: 'profile',
    path: 'profile',
    icon: <ImProfile />,
  },
  {
    text: 'admin',
    path: 'admin',
    icon: <MdAdminPanelSettings />,
  },
];
