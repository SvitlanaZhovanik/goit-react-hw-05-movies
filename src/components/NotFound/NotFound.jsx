import film from '../../img/film.png';
import { Link } from 'react-router-dom';
import s from './NotFound.module.css';
export const NotFound = () => {
  return (
    <div className={s.wrapper}>
      <Link className={s.link} to="/">
        <h2 className={s.text}>This page doesn't exist. Go Home</h2>
        <img src={film} alt="Film and popcorn" />
      </Link>
    </div>
  );
};
