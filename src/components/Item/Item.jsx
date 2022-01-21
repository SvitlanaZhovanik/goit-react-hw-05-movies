import { Link } from 'react-router-dom';
import s from './Item.module.css';
const Item = ({ img, title, id }) => {
  return (
    <li className={s.item}>
      <div className={s.wrapper}>
        <Link className={s.link} to={`/movies/${id}`}>
          <img className={s.img} src={img} alt={`Poster for ${title}`} />
          <p className={s.text}>{title}</p>
        </Link>
      </div>
    </li>
  );
};
export default Item;
