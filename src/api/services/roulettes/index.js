import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { errorAlert, successAlert } from '../../../utils/alerts';
const apiUrl = process.env.REACT_APP_ROULETTE;

export const getAllRoulettes = createAsyncThunk(
  'roulettes/getAllRoulettes',
  async () => {
    const url = `${apiUrl}/all`;
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (err) {
      err.response.status !== 404 &&
        errorAlert('Error al solicitar las ruletas existentes!');
    }
  }
);

export const getRouletteById = createAsyncThunk(
  'roulettes/getRouletteById',
  async (rouletteId) => {
    const url = `${apiUrl}/id/${rouletteId}`;
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (err) {
      err.response.status !== 404 &&
        errorAlert('Error al solicitar la ruleta en cuestion!');
    }
  }
);

export const getAllRouletteResults = createAsyncThunk(
  'roulettes/getAllRouletteResults',
  async (rouletteId) => {
    const url = `${apiUrl}/all-results/${rouletteId}`;
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (err) {
      err.response.status !== 404 &&
        errorAlert('Error al solicitar las resultados existentes!');
    }
  }
);

export const runnedRoulette = createAsyncThunk(
  'roulettes/runnedRoulette',
  async ({ rouletteId, playNumber }) => {
    const url = `${apiUrl}/running-game/${rouletteId}`;
    try {
      const res = await axios.get(url);
      playNumber === res.data.result
        ? successAlert('Has ganado, felicidades!')
        : errorAlert('Has perdido, lo sentimos!');
      return res.data.result;
    } catch (err) {
      errorAlert('Error al solicitar el resultado!');
      console.log(err);
    }
  }
);

export const createRoulette = createAsyncThunk(
  'roulettes/createRoulette',
  async (createRouletteData) => {
    const url = `${apiUrl}/create/${localStorage.getItem('docUser')}`;
    try {
      const res = await axios.post(url, createRouletteData);
      successAlert('Ruleta creada exitosamente!');
      return res.data;
    } catch (err) {
      errorAlert('Error al crear la ruleta!');
      console.log(err);
    }
  }
);

export const deleteRoulette = createAsyncThunk(
  'roulettes/deleteRoulette',
  async (rouletteId) => {
    const url = `${apiUrl}/delete/${rouletteId}/${localStorage.getItem(
      'docUser'
    )}`;
    try {
      await axios.delete(url);
      successAlert('Ruleta eliminada manera exitosa!');
      return rouletteId;
    } catch (err) {
      errorAlert('Error al eliminar la ruleta!');
      console.log(err);
    }
  }
);
