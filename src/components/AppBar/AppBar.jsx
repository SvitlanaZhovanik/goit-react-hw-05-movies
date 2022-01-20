import { NavLink } from 'react-router-dom';
const AppBar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <br />
      <NavLink to="movies">Movies</NavLink>
    </nav>
  );
};
export default AppBar;
