import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import Movies from './pages/Movies';
import MovieDetailsPage from './pages/MovieDetailsPage';
import NotfoundPage from './pages/NotfoundPage';
import Cast from './pages/Cast';
import Reviews from './pages/Reviews';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="movies" element={<Movies />}>
          <Route part=":movieId" element={<MovieDetailsPage />}>
            <Route part="cast" element={<Cast />} />
            <Route part="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route index element={<HomePage />} />
        <Route path="*" element={<NotfoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
