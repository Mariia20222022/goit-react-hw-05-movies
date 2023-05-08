import { Link, Outlet, useParams } from 'react-router-dom';

import MovieGalleryItem from 'components/MovieGalleryItem/MovieGalleryItem';
import CastIcon from 'components/Icons/CastIcon';
import ReviewIcon from 'components/Icons/ReviewIcon';

import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const params = useParams();
  const { movieId } = params;

  return (
    <>
      <MovieGalleryItem movieId={movieId} />
      <div className={css.wrapper}>
        <ul className={css.list}>
          <li>
            <Link className={css.link} to={`/movies/${movieId}/cast`}>
              Cast
              <CastIcon />
            </Link>
          </li>
          <li>
            <Link className={css.link} to={`/movies/${movieId}/reviews`}>
              Review
              <ReviewIcon />
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetails;
