import { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { searchMovies } from '../../API/api';
import Item from '../../components/Item/Item';
import SearchForm from '../../components/SearchForm/SearchForm';
import { normalizeMovies } from '../../function/function';
import s from './Movies.module.css';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const navigation = useNavigate();
  const searchQuery = new URLSearchParams(location.search).get('query') ?? '';

  let setSearch = request => {
    navigation({ ...location, search: `query=${request}` });
  };

  useEffect(() => {
    if (!searchQuery) return;
    searchMovies(searchQuery)
      .then(data => normalizeMovies(data.results))
      .then(setMovies);
  }, [searchQuery]);

  return (
    <div>
      <SearchForm onSubmit={setSearch} />
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
                  location={location}
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
