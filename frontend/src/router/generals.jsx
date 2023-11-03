import { PATH } from '@/constants/path';
import { HomeScreen } from '@/pages';

export const GENERAL_ROUTES = [
  {
    exact: true,
    path: PATH.HOME,
    privateroute: false,
    component: HomeScreen,
    permissions: ['all'],
    layout: 'general',
  },
];
