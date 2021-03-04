const API_KEY = '864d74a3a6d66b76c9fc89a4df3871e6';
const baseURL = 'https://api.themoviedb.org/3';

// const video_API = `https://api.themoviedb.org/3/movie/550?api_key=${key_API}`;

// const movies_API = `https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`;
// const moviesImages = `https://image.tmdb.org/t/p/w500`;






// POPULAR MOVIES
export const popularMovies = `${baseURL}/movie/popular?api_key=${API_KEY}&page=1`;

// GET GENRES ID/S
export const genres = `${baseURL}/genre/movie/list?api_key=${API_KEY}&language=en-US`;

// LINK FOR GENRES 
export const changeGenreLink = `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=`;


// SEARCH MOVIES LINK
// export const searchQuery = `https://api.themoviedb.org/3/movie/343611?api_key=${API_KEY}`;
