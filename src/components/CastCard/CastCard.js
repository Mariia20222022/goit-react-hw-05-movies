import css from './CastCard.module.css';
const CastCard = ({ profilePath, name, role }) => {
  const baseImgURL = 'https://image.tmdb.org/t/p/w200';
  const placeholderImg = 'https://via.placeholder.com/200';
  return (
    <li>
      <img
        src={profilePath ? baseImgURL + profilePath : placeholderImg}
        alt={name}
      />
      <p className={css.name}>{name}</p>
      <p className={css.role}>Character: {role}</p>
    </li>
  );
};
export default CastCard;
