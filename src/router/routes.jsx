import { Dashboard } from '../pages/dashboard/Dashboard';
import { Login } from '../pages/login/Login';

export const login = '/';
export const register = '/register';
export const dashboard = '/dashboard';
export const roulettes = '/dashboard/roulettes';

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
  {
    route: dashboard,
    component: Dashboard,
    end: true,
  },
  {
    route: roulettes,
    component: Dashboard,
    end: true,
  },
];
