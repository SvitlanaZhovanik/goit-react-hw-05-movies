import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { searchMovies } from '../../API/api';
import Item from '../../components/Item/Item';
import SearchForm from '../../components/SearchForm/SearchForm';
import { normalizeMovies } from '../../function/function';
import s from './Movies.module.css';

export default function Movies() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    if (query === '') {
      return;
    }
    searchMovies(query)
      .then(data => normalizeMovies(data.results))
      .then(setMovies);
  }, [query]);

  return (
    <div>
      <SearchForm onSubmit={setQuery} />
      {movies && (
        <>
          <ul className={s.list}>
            {movies.map(movie => {
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
          <Outlet />
        </>
      )}
    </div>
  );
}
