import axios from 'axios';
import { errorAlert, successAlert } from '../../../utils/alerts';

const apiUrl = process.env.REACT_APP_USER;

export const loginService = async (gmail, password) => {
  const url = `${process.env.REACT_APP_USER}/login/${gmail}/${password}`;
  const response = await axios.get(url);
  const { login: loginStatus, user: userInfo } = response.data;
  return { loginStatus, userInfo };
};

export const registerService = async ({
  dataToCreateUser,
  successAlert,
  errorAlert,
}) => {
  const url = `${process.env.REACT_APP_USER}/create`;
  try {
    await axios.post(url, dataToCreateUser);
    successAlert('Usuario registrado exitosamente!');
  } catch (err) {
    console.log(err);
    errorAlert('Error al registrar el usuario!');
  }
};

export const adquireCredits = async ({ adquireCreditsData }) => {
  const url = `${apiUrl}/acquire-credits/${localStorage.getItem('docUser')}`;
  try {
    await axios.post(url, adquireCreditsData);
    successAlert(`Compra exitosa!`);
  } catch (err) {
    console.log(err);
    errorAlert('Error al realizar la compra');
  }
};
