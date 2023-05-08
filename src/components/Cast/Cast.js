import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CastCard from 'components/CastCard/CastCard';
import css from './Cast.module.css';

const Cast = () => {
  const baseURL = 'https://api.themoviedb.org/3';
  const apiKey = 'acee11b4b18b6e03b694743e5006f3ac';
  const language = 'en-US';
  const params = useParams();
  const { movieId } = params;

  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${baseURL}/movie/${movieId}/credits?api_key=${apiKey}&language=${language}`
        );
        const castData = await response.json();
        console.log(castData);
        setCast(castData.cast);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCast();
  }, [movieId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <ul className={css.list}>
      {cast.map(actor => (
        <CastCard
          key={actor.id}
          profilePath={actor.profile_path}
          name={actor.original_name}
          role={actor.character}
        />
      ))}
    </ul>
  );
};

export default Cast;
