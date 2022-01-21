import s from './Header.module.css';
export const Header = ({ children }) => {
  return <header className={s.header}>{children}</header>;
};
