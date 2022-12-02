import { createSlice } from '@reduxjs/toolkit';
import {
  createRoulette,
  deleteRoulette,
  getAllRouletteResults,
  getAllRoulettes,
  getRouletteById,
  runnedRoulette,
} from '../../../api/services/roulettes';

const initialState = {
  result: null,
  rouletteId: '',
  currentRoulete: null,
  roulettesList: [],
  rouletteResults: [],
  loadingResult: false,
  loadingRoulette: false,
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
    clearResult: (state, { payload }) => {
      state.result = payload;
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
      .addCase(getRouletteById.pending, (state) => {
        state.loadingRoulette = true;
      })
      .addCase(getRouletteById.fulfilled, (state, { payload }) => {
        state.loadingRoulette = false;
        if (payload !== undefined) {
          state.currentRoulete = payload;
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
      .addCase(runnedRoulette.pending, (state) => {
        state.loadingResult = true;
      })
      .addCase(runnedRoulette.fulfilled, (state, { payload }) => {
        state.loadingResult = false;
        if (payload !== undefined) {
          state.result = payload;
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
export const { setRouletteId, clearResult } = rouletteSlice.actions;
export default rouletteSlice.reducer;
