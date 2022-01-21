import { NavLink } from 'react-router-dom';
import s from './AppBar.module.css';
const AppBar = () => {
  return (
    <nav className={s.navi}>
      <NavLink
        style={({ isActive }) => ({ color: isActive ? '#d910e0' : '#ddd3d3' })}
        className={s.navLink}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        style={({ isActive }) => ({ color: isActive ? '#d910e0' : '#ddd3d3' })}
        className={s.navLink}
        to="movies"
      >
        Movies
      </NavLink>
    </nav>
  );
};
export default AppBar;
