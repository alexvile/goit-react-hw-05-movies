import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Home } from '../Pages/Home/Home';
import { Movies } from '../Pages/Movies/Movies';
import { MovieInfo } from './MovieInfo/MovieInfo';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { lazy } from 'react';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          {/* <Route path="home" element={<Home />}></Route> */}
          <Route path="movies" element={<Movies />}></Route>
          <Route path="movies/:movieId" element={<MovieInfo />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </>
  );
};
