import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Home } from './Pages/Home/Home';
import { Movies } from './Pages/Movies/Movies';
import { MovieInfo } from './MovieInfo/MovieInfo';
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          {/* <Route path="home" element={<Home />}></Route> */}
          <Route path="movies" element={<Movies />}>
            <Route path=":movieId" element={<MovieInfo />}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
};
