import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NoFound from '../../images/no-image-found.jpg';
import { getMovieCast } from 'services/movies-api';
import { CastSection, CastList, CastItem } from './Cast.styled';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  // console.log(movieId);
  useEffect(() => {
    getMovieCast(movieId).then(obj => {
      // console.log(obj);
      // console.log(obj.cast);
      setCast(obj.cast);
    });
  }, [movieId]);

  if (cast.length === 0) {
    return <div>There is no information about cast</div>;
  }

  const width = '100';
  return (
    <CastSection>
      <h3>Cast</h3>
      <CastList>
        {cast.map(({ id, name, profile_path, character }) => (
          <CastItem key={id}>
            <div>
              {profile_path !== null ? (
                <img
                  width={width}
                  src={`https://image.tmdb.org/t/p/original${profile_path}`}
                  alt={name}
                />
              ) : (
                <img width={width} src={NoFound} alt="Not found" />
              )}
            </div>
            <div>
              <p>{name}</p>
              <p>
                <b>Character:</b> {character}
              </p>
            </div>
          </CastItem>
        ))}
      </CastList>
    </CastSection>
  );
};
