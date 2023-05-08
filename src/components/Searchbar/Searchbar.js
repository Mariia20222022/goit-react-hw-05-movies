import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';
import MovieIcon from 'components/Icons/MovieIcon';
import BackIcon from 'components/Icons/BackIcon';
import SearchIcon from 'components/Icons/SearchIcon';

const Searchbar = ({ onSearch }) => {
  const baseURL = 'https://api.themoviedb.org/3';
  const apiKey = 'acee11b4b18b6e03b694743e5006f3ac';
  const language = 'en-US';
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  function handleClick() {
    navigate('/');
  }

  useEffect(() => {
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

        const response = await fetch(`${baseURL}/search/movie?${searchParams}`);
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
  }, [query]);

  const handleSubmit = event => {
    event.preventDefault();
    onSearch(query);
    setQuery('');
  };

  const searchedMovies = movies.filter(movie => movie.title.includes(query));

  console.log(query, searchedMovies);

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <button onClick={handleClick} className={css.customButton}>
          <BackIcon />
          Back
        </button>
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
          {searchedMovies.map(movie => (
            <li key={movie.id}>
              <Link className={css.link} to={`/movies/${movie.id}`}>
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
