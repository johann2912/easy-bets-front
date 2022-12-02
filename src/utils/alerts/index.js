import { toast } from 'react-toastify';

export const successAlert = (message) =>
  toast.success(message, {
    theme: 'colored',
  });

export const errorAlert = (message) =>
  toast.error(message, {
    theme: 'colored',
  });

export const infoAlert = (message) =>
  toast.info(message, {
    theme: 'colored',
  });
