import { Link, Routes, Route, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect, lazy, Suspense } from 'react';
import { getMovieDetails } from '../../API/api';
import { normalizeMovie } from '../../function/function';
import s from './MovieDetailsPage.module.css';
import { css } from '@emotion/react';
import { toast } from 'react-toastify';
import CircleLoader from 'react-spinners/CircleLoader';

const Cast = lazy(() =>
  import('../../components/Cast/Cast' /* webpackChunkName: "cast-page" */),
);
const Reviews = lazy(() =>
  import(
    '../../components/Reviews/Reviews' /* webpackChunkName: "reviews-page" */
  ),
);

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const location = useLocation();
  const goBackUrl = location?.state?.from ?? '/';

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await getMovieDetails(movieId);
        const normalizeData = normalizeMovie(data);
        setMovie(normalizeData);
      } catch (error) {
        toast('😟 Ups, there isn`t movie. Enter, please "Go Back"');
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  const { genres, overview, poster_path, title, release_date, vote_average } =
    movie;
  return (
    <>
      <Link className={s.linkGoBack} to={goBackUrl}>
        &lArr; Go back
      </Link>
      <div className={s.wrapperFilm}>
        <img src={poster_path} alt={`Poster for ${title}`} />
        <div className={s.wrapperText}>
          <h2 className={s.description}>
            {title} {release_date ? `(${release_date})` : null}
          </h2>
          <p className={s.description}>
            <span className={s.text}>User score: </span>
            {vote_average}
          </p>
          <p className={s.description}>
            <span className={s.text}>Overview:</span> {overview}
          </p>
          <p className={s.description}>
            <span className={s.text}>Genres:</span>
          </p>
          <ul>
            {genres &&
              genres.map(el => (
                <li className={s.item} key={el.id}>
                  {el.name}
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className={s.wrapper}>
        <h3>Additional information:</h3>
        <ul>
          <li>
            <Link className={s.link} to="cast" state={{ from: goBackUrl }}>
              Cast
            </Link>
          </li>
          <li>
            <Link className={s.link} to="reviews" state={{ from: goBackUrl }}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Suspense
        fallback={
          <CircleLoader
            color={'#d910e0'}
            css={css`
              margin-left: 45%;
            `}
            size={80}
          />
        }
      >
        <Routes>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </Suspense>
    </>
  );
}
