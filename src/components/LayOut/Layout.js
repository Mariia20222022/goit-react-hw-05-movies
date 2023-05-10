import { NavLink, Outlet } from 'react-router-dom';
import MovieIcon from 'components/Icons/MovieIcon';

import css from './LayOut.module.css';
const Layout = () => {
  // const [showNotFoundLink, setShowNotFoundLink] = useState(false);
  const showNotFoundLink = false;
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
          {showNotFoundLink && (
            <li>
              <NavLink to="*">Not Found</NavLink>
            </li>
          )}
        </nav>
      </ul>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
