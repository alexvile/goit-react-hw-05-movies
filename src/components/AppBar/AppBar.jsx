import { NavLink } from 'react-router-dom';
import { Header, List, Item } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Header>
      <nav>
        <List>
          <Item>
            <NavLink to="/" end>
              Home
            </NavLink>
          </Item>
          <Item>
            <NavLink to="/movies">Movies</NavLink>
          </Item>
        </List>
      </nav>
    </Header>
  );
};
