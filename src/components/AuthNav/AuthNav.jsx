import { Nav, List } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <nav>
      <List>
        <li>
          <Nav to="/register">Sign up</Nav>
        </li>
        <li>
          <Nav to="/login">Log in</Nav>
        </li>
      </List>
    </nav>
  );
};