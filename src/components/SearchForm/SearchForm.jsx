import s from './SearchForm.module.css';
import { normalizeQuery } from '../../function/function';
import { toast } from 'react-toastify';

export default function SearchForm({ onSubmit }) {
  const handleSubmit = e => {
    const { value } = e.currentTarget.elements.query;
    e.preventDefault();
    const normalizedQuery = normalizeQuery(value);
    if (!normalizedQuery) {
      toast('😟 Ups, there is no movie ');
      return;
    }
    onSubmit(normalizedQuery);
    e.currentTarget.reset();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input
        className={s.input}
        type="text"
        name="query"
        placeholder="Enter your request"
      />
      <button className={s.button} type="submit">
        &#x1F50D;
      </button>
    </form>
  );
}
