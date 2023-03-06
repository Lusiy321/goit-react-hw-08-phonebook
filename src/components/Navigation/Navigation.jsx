import { useSelector } from 'react-redux';
import { selectToken } from 'redux/Auth/auth-selectors';

import { Nav } from './Navigation.styled';
import { List } from './Navigation.styled';

export const Navigation = () => {
  const token = useSelector(selectToken);
  return (
    <nav>
      <List>
        <li>
          <Nav to="/" end>
            Home
          </Nav>
        </li>
        {token && (
          <li>
            <Nav to="contacts">Contacts</Nav>
          </li>
        )}
      </List>
    </nav>
  );
};