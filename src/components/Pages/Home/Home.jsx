import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { fetchTrending } from 'services/movies-api';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrending().then(obj => {
      // console.log(obj);
      console.log(obj.results);
      setMovies(obj.results);
    });
  }, []);

  return (
    <div>
      Home page Trending today
      {movies.length > 0 ? (
        <ul>
          {movies.map(({ id, title, name, media_type }) => (
            <li key={id}>
              <NavLink to={`/movies/${id}`}>
                {media_type} {title} {name}
              </NavLink>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
