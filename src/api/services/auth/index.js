import axios from 'axios';

export const loginService = async (gmail, password) => {
  const url = `${process.env.REACT_APP_USER}/login/${gmail}/${password}`;
  const response = await axios.get(url);
  const { login: loginStatus, user: userInfo } = response.data;
  return { loginStatus, userInfo };
};
