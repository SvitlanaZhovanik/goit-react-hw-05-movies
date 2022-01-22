import { Link } from 'react-router-dom';
import s from './Item.module.css';
import PropTypes from 'prop-types';

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

Item.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
export default Item;
