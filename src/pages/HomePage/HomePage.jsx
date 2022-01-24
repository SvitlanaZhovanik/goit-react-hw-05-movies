import { useState, useEffect } from 'react';
import { getTrending } from '../../API/api';
import { useLocation } from 'react-router-dom';
import { normalizeMovies } from '../../function/function';
import s from './HomePage.module.css';
import { toast } from 'react-toastify';
import List from '../../components/List/List';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrending()
      .then(data => normalizeMovies(data.results))
      .then(setMovies)
      .catch(() => toast('😟 Ups, not found'));
  }, []);
  return (
    <>
      <h1 className={s.text}>Trending for the week</h1>
      <List movies={movies} location={location} />
    </>
  );
}
