const API_KEY = '?api_key=4ba4d08a31d0df29915fca7c379d569c';
const BASE_URL = 'https://api.themoviedb.org/3/';

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}
export function getTrending() {
  return fetchWithErrorHandling(`${BASE_URL}/trending/movie/week${API_KEY}`);
}
export function searchMovies(query) {
  return fetchWithErrorHandling(
    `${BASE_URL}search/movie${API_KEY}&query=${query}`,
  );
}
export function getMovieDetails(movieId) {
  return fetchWithErrorHandling(`${BASE_URL}/movie/${movieId}${API_KEY}`);
}
export function getMovieCredits(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}/credits${API_KEY}`,
  );
}
export function getMovieReviews(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}/credits${API_KEY}`,
  );
}
