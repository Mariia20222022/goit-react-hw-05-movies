import PropTypes from 'prop-types';
import css from './ReviewCard.module.css';
const ReviewCard = ({ author, review }) => {
  return (
    <div>
      <p className={css.author}>Author: {author}</p>
      <p className={css.review}>Review{review}</p>
    </div>
  );
};
ReviewCard.propTypes = {
  author: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
};

export default ReviewCard;
