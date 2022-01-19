import { Navlink } from 'react-router-dom';
const AppBar = () => {
  return (
    <nav>
      <Navlink to="/">Home</Navlink>
      <Navlink to="movies">Movies</Navlink>
    </nav>
  );
};
export default AppBar;
