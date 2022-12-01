import { configureStore } from '@reduxjs/toolkit';
import roulettesReducer from '../pages/dashboard/reducer/roulettes.reducer';

export const store = configureStore({
  reducer: {
    roulettes: roulettesReducer,
  },
});
