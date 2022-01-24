import s from './List.module.css';
import Item from '../Item/Item';
export default function List({ movies, location }) {
  return (
    <ul className={s.list}>
      {movies &&
        movies.map(movie => {
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
  );
}
