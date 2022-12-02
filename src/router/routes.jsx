import { AdquireCredits } from '../pages/adquireCredits/AdquireCredits';
import { Dashboard } from '../pages/dashboard/Dashboard';
import { Login } from '../pages/login/Login';
import { Results } from '../pages/results/Results';

export const login = '/';
export const register = '/register';
export const dashboard = '/dashboard';
export const roulettes = '/dashboard/roulettes';
export const rouletteResults = '/dashboard/roulettes/:rouletteId/results';
export const adquireCredits = '/dashboard/adquire-credits';

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
  {
    route: rouletteResults,
    component: Results,
    end: false,
  },
  {
    route: adquireCredits,
    component: AdquireCredits,
    end: false,
  },
];
