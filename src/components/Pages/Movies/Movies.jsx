import { Outlet } from 'react-router-dom';
// import { useState, useEffect } from 'react';
import { Searchbar } from 'components/Searchbar/Searchbar';
export const Movies = () => {
  // const [movies, setMovies] = useState([]);
  // useEffect(() => {
  //   first;
  // }, [third]);

  return (
    <div>
      Moviees
      <Searchbar />
      <Outlet />
    </div>
  );
};
