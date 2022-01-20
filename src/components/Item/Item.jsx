import { Link } from 'react-router-dom';
const Item = ({ img, title, id }) => {
  return (
    <li>
      <Link to={`/movies/${id}`}>
        <p>{title}</p>
      </Link>
    </li>
  );
};
export default Item;
