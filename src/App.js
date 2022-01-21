import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import Movies from './pages/Movies/Movies';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
import NotfoundPage from './pages/NotfoundPage';
import Cast from './pages/Cast/Cast';
import Reviews from './pages/Reviews/Reviews';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route index element={<HomePage />} />
        <Route path="*" element={<NotfoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
