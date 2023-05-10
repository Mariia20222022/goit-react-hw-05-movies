import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Searchbar from 'components/Searchbar/Searchbar';
import MovieGallery from 'components/MovieGallery/MovieGallery';

const Movies = () => {
  const apiKey = 'acee11b4b18b6e03b694743e5006f3ac';

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  console.log(location.state);
  const handleSearch = async query => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
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

  return (
    <div>
      <Searchbar onSearch={handleSearch} state={location.state} />
      {loading && <p>Loading...</p>}
      {!loading && <MovieGallery movies={movies} state={location.state} />}
    </div>
  );
};
Movies.propTypes = {
  handleSearch: PropTypes.func,
  movies: PropTypes.array,
};

export default Movies;
