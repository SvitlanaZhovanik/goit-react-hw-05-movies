import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import { Header } from '../Header/Header';
import { ToastContainer } from 'react-toastify';
import s from './Layout.module.css';

export default function Layout() {
  return (
    <main className={s.section}>
      <Header>
        <AppBar />
      </Header>
      <Outlet />
      <ToastContainer position="bottom-left" />
    </main>
  );
}
