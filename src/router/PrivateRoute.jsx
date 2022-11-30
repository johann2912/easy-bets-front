import { Navigate } from 'react-router-dom';

export const PrivateRoute = (props) => {
  return props.isLoggedIn ? (
    <>
      <props.element />{' '}
    </>
  ) : (
    <Navigate to="/" />
  );
};
