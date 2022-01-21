import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCredits } from '../../API/api';
import { normalizeCast } from '../../function/function';
import s from './Cast.module.css';
export default function Cast() {
  const [profiles, setProfiles] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    getMovieCredits(movieId)
      .then(data => normalizeCast(data.cast))
      .then(setProfiles);
  }, [movieId]);
  return (
    <div>
      <ul className={s.list}>
        {profiles.map(profile => {
          const { id, name, profile_path, character } = profile;
          return (
            <li className={s.item} key={id}>
              <img
                className={s.img}
                src={profile_path}
                alt={`foto by ${name}`}
                width="100"
              />
              <div>
                <p>{name}</p>
                <p>
                  <span className={s.accent}>Character: </span> {character}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
