import { Link, Outlet, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetails } from '../../API/api';
import { normalizeMovie } from '../../function/function';
import s from './MovieDetailsPage.module.css';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getMovieDetails(movieId)
      .then(data => {
        return normalizeMovie(data);
      })
      .then(setMovie);
  }, [movieId]);
  const handleClick = () => {
    navigate(-1);
  };
  const { genres, overview, poster_path, title, release_date, vote_average } =
    movie;
  return (
    <>
      <button className={s.button} type="button" onClick={handleClick}>
        &#x2B05;&#xFE0F; Go back
      </button>
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
            <Link className={s.link} to="cast">
              Cast
            </Link>
          </li>
          <li>
            <Link className={s.link} to="reviews">
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}
