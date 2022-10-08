// API key v3
const API_KEY = 'a94710b6dd420fca467f69187c416605';
// Api key v4
// const API_KEY2 =
//   'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTQ3MTBiNmRkNDIwZmNhNDY3ZjY5MTg3YzQxNjYwNSIsInN1YiI6IjYzNDE1YTIwNWI0ZmVkMDA3YWU2YjljYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._mRIN1K4OMRmlkUVX6SDjjBheZS-mmbAEkPZe2NIP5o';

const media_type = 'all'; // all - movie - tv - person
const time_window = 'day'; // day - week

// export async function fetchMovies() {
//   const response = await fetch(
//     `https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`
//   );
//   console.log(response);
//   if (response.ok) {
//     return response.json();
//   }
//   return await Promise.reject(new Error('Ups! Something went wrong'));
// }

export async function fetchTrending() {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/${media_type}/${time_window}?api_key=${API_KEY}`
  );
  console.log(response);
  if (response.ok) {
    return response.json();
  }
  return await Promise.reject(new Error('Ups! Something went wrong'));
}
