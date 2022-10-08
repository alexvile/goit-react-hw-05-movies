import { NavLink } from 'react-router-dom';
import { Header, List, Item } from './AppBar.styled';
const navItems = [
  { href: 'home', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

export const AppBar = () => {
  return (
    <Header>
      <nav>
        <List>
          {navItems.map(({ href, text }) => (
            <Item key={href}>
              <NavLink to={href}>{text}</NavLink>
            </Item>
          ))}
        </List>
      </nav>
    </Header>
  );
};
