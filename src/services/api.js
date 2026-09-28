const API_KEY = "2e211341";

// Search Movies
export const searchMovies = async (movieName) => {
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=${API_KEY}&s=${movieName}`
  );

  return response.json();
};

// Get Movie Details
export const getMovieDetails = async (id) => {
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
  );

  return response.json();
};