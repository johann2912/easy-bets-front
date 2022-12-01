import { createSlice } from '@reduxjs/toolkit';
import {
  createRoulette,
  deleteRoulette,
  getAllRouletteResults,
  getAllRoulettes,
} from '../../../api/services/roulettes';

const initialState = {
  rouletteId: '',
  roulettesList: [],
  rouletteResults: [],
  loadingRoulettes: false,
  loadingRouletteResults: false,
};

export const rouletteSlice = createSlice({
  name: 'roulettes',
  initialState,
  reducers: {
    setRouletteId: (state, { payload }) => {
      state.rouletteId = payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getAllRoulettes.pending, (state) => {
        state.loadingRoulettes = true;
      })
      .addCase(getAllRoulettes.fulfilled, (state, { payload }) => {
        state.loadingRoulettes = false;
        if (payload !== undefined) {
          state.roulettesList = payload;
        }
      })
      .addCase(getAllRouletteResults.pending, (state) => {
        state.loadingRouletteResults = true;
      })
      .addCase(getAllRouletteResults.fulfilled, (state, { payload }) => {
        state.loadingRouletteResults = false;
        if (payload !== undefined) {
          state.rouletteResults = payload;
        }
      })
      .addCase(createRoulette.pending, (state) => {
        state.loadingRoulettes = true;
      })
      .addCase(createRoulette.fulfilled, (state, { payload }) => {
        state.loadingRoulettes = false;
        if (payload !== undefined) {
          state.roulettesList = [...state.roulettesList, payload];
        }
      })
      .addCase(deleteRoulette.pending, (state) => {
        state.loadingRoulettes = true;
      })
      .addCase(deleteRoulette.fulfilled, (state, { payload }) => {
        state.loadingRoulettes = false;
        if (payload !== undefined) {
          state.roulettesList = state.roulettesList.filter(
            (roulette) => roulette.id !== payload
          );
        }
      });
  },
});

export const getRouletteSelector = (state) => state.roulettes;
export const { setRouletteId } = rouletteSlice.actions;
export default rouletteSlice.reducer;
