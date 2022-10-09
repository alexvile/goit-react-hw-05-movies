import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetails } from 'services/movies-api';
import {
  Card,
  CardImgWrapper,
  CardDetails,
  CardTitle,
  CardScore,
  CardOverview,
  CardGenres,
  CardGenresLabel,
  CardGenresList,
} from './MovieInfo.styled';

export const MovieInfo = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    getMovieDetails(movieId).then(obj => {
      console.log(obj);
      setMovie(obj);
    });
  }, [movieId]);

  if (!movie) {
    return null;
  }
  const { poster_path, title, release_date, vote_average, overview, genres } =
    movie;
  return (
    <div>
      Movie Info
      <a href="/">Go back</a>
      <Card>
        <CardImgWrapper>
          <img
            width={200}
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt=""
          />
        </CardImgWrapper>
        <CardDetails>
          <CardTitle>
            <span>{title}</span>&nbsp;
            <span>({release_date.split('-')[0]})</span>
          </CardTitle>
          <CardScore>User score: {Math.round(vote_average * 10)}%</CardScore>
          <CardOverview>
            <h2>Overview:</h2>
            <p>{overview}</p>
          </CardOverview>
          <CardGenres>
            {genres.length !== 0 && (
              <>
                <CardGenresLabel>Genres:</CardGenresLabel>
                <CardGenresList>
                  {genres.map(item => (
                    <li key={item.id}>{item.name}</li>
                  ))}
                </CardGenresList>
              </>
            )}
          </CardGenres>
        </CardDetails>
      </Card>
    </div>
  );
};
