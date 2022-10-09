const BASE_URL = 'https://api.themoviedb.org/3';
// API key v3
const API_KEY = 'a94710b6dd420fca467f69187c416605';
// Api key v4
// const API_KEY2 =
//   'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTQ3MTBiNmRkNDIwZmNhNDY3ZjY5MTg3YzQxNjYwNSIsInN1YiI6IjYzNDE1YTIwNWI0ZmVkMDA3YWU2YjljYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._mRIN1K4OMRmlkUVX6SDjjBheZS-mmbAEkPZe2NIP5o';

const media_type = 'all'; // all - movie - tv - person
const time_window = 'day'; // day - week

export async function fetchTrending() {
  const response = await fetch(
    `${BASE_URL}/trending/${media_type}/${time_window}?api_key=${API_KEY}`
  );
  // console.log(response);
  if (response.ok) {
    return response.json();
  }
  return await Promise.reject(new Error('Ups! Something went wrong'));
}

export async function getMovieDetails(movieId) {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  // console.log(response);
  if (response.ok) {
    return response.json();
  }
  return await Promise.reject(new Error('Ups! Something went wrong'));
}

export async function getMovieByName(query) {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=true&query=${query}`
  );
  console.log(response);
  if (response.ok) {
    return response.json();
  }
  return await Promise.reject(new Error('Ups! Something went wrong'));
}

export async function getMovieCast(movieId) {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  // console.log(response);
  if (response.ok) {
    return response.json();
  }
  return await Promise.reject(new Error('Ups! Something went wrong'));
}

export async function getMovieReviews(movieId) {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  // console.log(response);
  if (response.ok) {
    return response.json();
  }
  return await Promise.reject(new Error('Ups! Something went wrong'));
}
