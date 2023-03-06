import { useSelector, useDispatch } from 'react-redux';
import { selectName } from 'redux/Auth/auth-selectors';
import { logout } from 'redux/Auth/authActions';
import { Text, Div, Button } from './AuthMenu.styled';

export const AuthMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectName);

  return (
    <Div>
      <Text>{`Hello, ${name}`}</Text>
      <Button onClick={() => dispatch(logout())}>Logout</Button>
    </Div>
  );
};