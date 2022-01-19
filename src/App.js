import { Routes, Route } from 'react-router-dom';
import AppBar from './components/AppBar';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import Cast from './pages/Cast';
import Reviews from './pages/Reviews';

const App = () => {
  return (
    <div>
      <AppBar />
      <Routes>
        <Route part="/" element={<HomePage />} />
        <Route part="movies" element={<MoviesPage />}>
          <Route part=":movieId" element={<MovieDetailsPage />}>
            <Route part="cast" element={<Cast />} />
            <Route part="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
