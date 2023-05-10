import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';
import MovieIcon from 'components/Icons/MovieIcon';
// import BackIcon from 'components/Icons/BackIcon';
import SearchIcon from 'components/Icons/SearchIcon';

const Searchbar = ({ onSearch }) => {
  const baseURL = 'https://api.themoviedb.org/3';
  const apiKey = 'acee11b4b18b6e03b694743e5006f3ac';
  const language = 'en-US';
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  let location = useLocation();
  console.log(location.state);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const queryParam = searchParams.get('query');

    if (queryParam) {
      setQuery(queryParam);
    }
  }, [searchParams]);

  useEffect(() => {
    if (query) {
      const fetchMovies = async () => {
        try {
          setLoading(true);

          const searchParams = new URLSearchParams({
            api_key: apiKey,
            language: language,
            query: query,
            page: '1',
            include_adult: 'false',
          });

          const response = await fetch(
            `${baseURL}/search/movie?${searchParams}`
          );
          const moviesData = await response.json();
          setMovies(moviesData.results);
          console.log(moviesData.results);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };

      fetchMovies();
    }
  }, [query]);

  const handleSubmit = event => {
    event.preventDefault();
    searchParams.set('query', query);
    setSearchParams(searchParams);
  };

  console.log(query, movies);

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        {/* <button onClick={handleClick} className={css.customButton}>
          <BackIcon />
          Back
        </button> */}
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          name="query"
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
        <button className={css.button} type="submit">
          <SearchIcon />
          Search
        </button>
      </form>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link
                className={css.link}
                to={`/movies/${movie.id}`}
                state={{ from: location }}
              >
                <MovieIcon />
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

Searchbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Searchbar;
