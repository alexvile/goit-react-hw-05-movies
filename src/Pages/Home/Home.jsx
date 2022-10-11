import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { fetchTrending } from 'services/movies-api';
import { Title, Item } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  // console.log(location);

  useEffect(() => {
    fetchTrending().then(obj => {
      // console.log(obj);
      // console.log(obj.results);
      setMovies(obj.results);
    });
  }, []);

  return (
    <div>
      <Title>Trending today</Title>
      {movies.length > 0 ? (
        <ul>
          {movies.map(({ id, title, name }) => (
            <Item key={id}>
              <NavLink to={`/movies/${id}`} state={{ from: location }}>
                {title} {name}
              </NavLink>
            </Item>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Home;
