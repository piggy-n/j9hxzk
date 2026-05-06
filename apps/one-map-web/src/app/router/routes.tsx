import type { RouteRecordRaw } from 'vue-router';

import { LoginPage } from '@/pages/login';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    component: LoginPage,
    name: 'login',
    path: '/login',
  },
];
