import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import MovieIcon from 'components/Icons/MovieIcon';

import css from './MovieGallery.module.css';
const MovieGallery = ({ movies }) => {
  return (
    <div>
      <ul className={css.gallery}>
        {movies.map(movie => (
          <li className={css.item} key={movie.id}>
            <Link className={css.link} to={`/movies/${movie.id}`}>
              <MovieIcon />
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
// MovieGallery.propTypes = {
//   movies: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       title: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };

export default MovieGallery;
