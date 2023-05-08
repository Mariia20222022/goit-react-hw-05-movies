import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ReviewCard from 'components/ReviewCard/ReviewCard';

const Reviews = () => {
  const baseURL = 'https://api.themoviedb.org/3';
  const apiKey = 'acee11b4b18b6e03b694743e5006f3ac';
  const language = 'en-US';

  const params = useParams();
  const { movieId } = params;

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          `${baseURL}/movie/${movieId}/reviews?api_key=${apiKey}&language=${language}&page=1`
        );
        const reviewData = await response.json();
        console.log(reviewData);
        setReviews(reviewData.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [movieId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {reviews.length > 0 ? (
        reviews.map(review => (
          <ReviewCard
            key={review.id}
            author={review.author}
            review={review.content}
          />
        ))
      ) : (
        <p style={{ fontSize: 36, textAlign: 'center' }}>
          We don't have any reviews for this movie.
        </p>
      )}
    </div>
  );
};

export default Reviews;
