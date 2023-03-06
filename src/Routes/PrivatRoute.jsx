import { useSelector } from 'react-redux';
import { selectToken } from '../redux/Auth/auth-selectors';
import { selectIsFetchingCurrentUser } from '../redux/Auth/auth-selectors';
import { Navigate } from 'react-router-dom';

export const PrivatRoute = ({ component: Component, redirectTo = '/' }) => {
  const token = useSelector(selectToken);
  const isRefreshing = useSelector(selectIsFetchingCurrentUser);
  const shouldRedirect = !token && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};