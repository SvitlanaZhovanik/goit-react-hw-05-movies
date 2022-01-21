import { useState, useEffect } from 'react';
import { getTrending } from '../../API/api';
import Item from '../../components/Item/Item';
import { normalizeMovies } from '../../function/function';
import s from './HomePage.module.css';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getTrending()
      .then(data => normalizeMovies(data.results))
      .then(setMovies);
  }, []);
  return (
    <>
      <h1 className={s.text}>Trending for the week</h1>
      <ul className={s.list}>
        {movies &&
          movies.map(movie => {
            return (
              <Item
                key={movie.id}
                img={movie.poster_path}
                title={movie.title}
                id={movie.id}
              />
            );
          })}
      </ul>
    </>
  );
}
