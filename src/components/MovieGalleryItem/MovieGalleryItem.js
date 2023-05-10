import css from './MovieGalleryItem.module.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
// import BackIcon from 'components/Icons/BackIcon';

const MovieGalleryItem = ({ movieId, from }) => {
  const location = useLocation();

  const baseImgURL = 'https://image.tmdb.org/t/p/w500';
  const apiKey = 'acee11b4b18b6e03b694743e5006f3ac';
  const language = 'en-US';

  const baseURL = 'https://api.themoviedb.org/3';
  const calculateRating = voteAverage => {
    return Math.round(voteAverage * 10);
  };

  const [movie, setMovie] = useState(null);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(
          `${baseURL}/movie/${movieId}?api_key=${apiKey}&language=${language}`
        );
        const movieData = await response.json();
        setMovie(movieData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    const fetchGenres = async () => {
      try {
        const response = await fetch(
          `${baseURL}/genre/movie/list?api_key=${apiKey}&language=${language}`
        );
        const data = await response.json();
        setGenres(data);
        console.log(data);
        return data.name;
      } catch (error) {
        console.log(error);
      }
    };

    setLoading(true);
    fetchMovie();
    fetchGenres();
  }, [movieId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!movie) {
    return null;
  }

  const rating = calculateRating(movie.vote_average);
  console.log(genres);

  return (
    <>
      <div className={css.box}>
        <button className={css.customButton}>
          <Link to={location.state?.from ?? '/'}></Link>
          Back
        </button>
      </div>
      <li className={css.item}>
        <Link to={`/movies/${movieId}`} />
        <img
          className={css.img}
          // src={baseImgURL + movie.poster_path}
          src={
            movie.poster_path
              ? baseImgURL + movie.poster_path
              : 'https://via.placeholder.com/500x750?text=No+Image'
          }
          alt={movie.title}
        />

        <div className={css.container}>
          <div className={css.wrapper}>
            <h2 className={css.title}>{movie.original_title}</h2>({' '}
            <p className={css.date}>
              {movie.release_date ? movie.release_date.split('-')[0] : ''}
            </p>
            )
          </div>
          <div>
            <h3 className={css.subtitle}>User score:</h3>
            <p className={css.rating}>{rating}%</p>
          </div>
          <h3 className={css.subtitle}>Overview:</h3>
          <p className={css.overview}>{movie.overview}</p>

          {movie.genres && movie.genres.length > 0 && (
            <div>
              <h3 className={css.subtitle}>Genres:</h3>
              <p className={css.genre}>
                {movie.genres.map(genre => genre.name).join(', ')}
              </p>
            </div>
          )}
        </div>
      </li>
    </>
  );
};
MovieGalleryItem.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default MovieGalleryItem;
