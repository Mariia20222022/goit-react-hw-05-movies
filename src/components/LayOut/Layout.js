import { NavLink, Outlet } from 'react-router-dom';
import MovieIcon from 'components/Icons/MovieIcon';
import css from './LayOut.module.css';
const Layout = () => {
  return (
    <div>
      <ul>
        <nav className={css.nav}>
          <div className={css.wrapper}>
            <MovieIcon />
          </div>
          <li>
            <NavLink to="/" className={css.navlink}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className={css.navlink}>
              Movies
            </NavLink>
          </li>
        </nav>
      </ul>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
