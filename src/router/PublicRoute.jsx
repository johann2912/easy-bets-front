import { Navigate } from 'react-router-dom';

export const PublicRoute = (props) => {
  return props.isLoggedIn ? <Navigate to="/dashboard" /> : <props.element />;
};
