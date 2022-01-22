import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import CircleLoader from 'react-spinners/CircleLoader';
import { css } from '@emotion/react';

const Layout = lazy(() =>
  import('./pages/Layout/Layout' /* webpackChunkName: "layout-page" */),
);
const HomePage = lazy(() =>
  import('./pages/HomePage/HomePage' /* webpackChunkName: "home-page" */),
);
const Movies = lazy(() =>
  import('./pages/Movies/Movies' /* webpackChunkName: "movies-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './pages/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "movieDetailsPage-page" */
  ),
);
const NotfoundPage = lazy(() =>
  import('./pages/NotfoundPage' /* webpackChunkName: "notfound-page" */),
);

const App = () => {
  return (
    <Suspense
      fallback={
        <CircleLoader
          color={'#d910e0'}
          css={css`
            margin: 45%;
            display: block;
          `}
          size={150}
        />
      }
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId/*" element={<MovieDetailsPage />} />
          <Route index element={<HomePage />} />
          <Route path="*" element={<NotfoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
