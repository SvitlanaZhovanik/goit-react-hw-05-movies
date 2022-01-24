import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { searchMovies } from '../../API/api';
import List from '../../components/List/List';
import SearchForm from '../../components/SearchForm/SearchForm';
import { normalizeMovies } from '../../function/function';
import { toast } from 'react-toastify';

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
      .then(setMovies)
      .catch(() => toast('😟 Ups, not found'));
  }, [searchQuery]);

  return (
    <div>
      <SearchForm onSubmit={setSearch} />
      {movies && <List movies={movies} location={location} />}
    </div>
  );
}
