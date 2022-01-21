import notFoundImg from '../img/posterNoImg.jpg';
import profileImg from '../img/profile.png';
export const normalizeMovies = movies => {
  return movies.map(movie => ({
    ...movie,
    poster_path: movie.poster_path
      ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
      : notFoundImg,
  }));
};
export const normalizeMovie = movie => {
  const date = new Date(movie.release_date);
  return {
    ...movie,
    release_date: movie.release_date ? date.getFullYear() : '',
    poster_path: movie.poster_path
      ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
      : notFoundImg,
  };
};
export const normalizeCast = actors => {
  return actors.map(actor => ({
    ...actor,
    profile_path: actor.profile_path
      ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
      : profileImg,
  }));
};
export const normalizeReviews = reviewsArray =>
  reviewsArray.map(result => ({
    ...result,
    content: result.content.replace(/<\/?[^>]+(>|$)/g, ''),
  }));
export const normalizeQuery = query =>
  query.toLowerCase().trim().split(' ').join('+');
