import { useState, useEffect } from 'react';
import { getTrending } from '../API/api';
import Item from '../components/Item/Item';
export default function HomePage() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getTrending()
      .then(data => data.results)
      .then(setMovies);
  }, []);
  return (
    <>
      <h1>Trending for the week</h1>
      <ul>
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
    </>
  );
}
