import { Login } from '../pages/login/Login';
// import { Dashboard } from '../pages/dashboard/Dashboard';

export const login = '/';
export const register = '/register';
export const dashboard = '/dashboard';

export const publicRoutes = [
  {
    route: login,
    component: Login,
  },
  {
    route: register,
    component: Login,
  },
];

export const privateRoutes = [
  // {
  //   route: dashboard,
  //   component: Dashboard,
  //   end: true,
  // },
];
