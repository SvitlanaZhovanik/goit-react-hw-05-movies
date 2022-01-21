import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviews } from '../../API/api';
import { normalizeReviews } from '../../function/function';
import s from './Reviews.module.css';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    getMovieReviews(movieId)
      .then(data => normalizeReviews(data.results))
      .then(setReviews);
  }, [movieId]);
  return (
    <div className={s.wrapper}>
      {!reviews.length ? (
        <p className={s.text}>No reviews</p>
      ) : (
        <ul>
          {reviews.map(review => {
            const { id, author, content } = review;
            return (
              <li key={id}>
                <p className={s.text}>
                  <span className={s.accent}>Reviewer: </span>
                  {author}
                </p>
                <p className={s.text}>{content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
