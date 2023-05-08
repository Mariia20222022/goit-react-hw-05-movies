import MovieGallery from 'components/MovieGallery/MovieGallery';
import { useState, useEffect } from 'react';
import css from './Home.module.css';

const apiKey = 'acee11b4b18b6e03b694743e5006f3ac';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`
        );
        const moviesData = await response.json();
        console.log(moviesData);
        setMovies(moviesData.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1 className={css.title}>Trending today</h1>
          <MovieGallery movies={movies} />
        </>
      )}
    </>
  );
};

export default Home;
