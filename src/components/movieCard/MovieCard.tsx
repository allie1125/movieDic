import styles from './movieCard.module.scss';

import { ISearch } from 'types/movie';

interface Props {
  movie: ISearch;
}
const MovieCard = ({ movie }: Props) => {
  const { Title, Year, imdbID, Type, Poster } = movie;

  const handleClickMovieCard = (id: string) => {
    console.log('clickMovieCard', id);
  };

  return (
    <button type='button' className={styles.movieCard} onClick={() => handleClickMovieCard(imdbID)}>
      <div className={styles.posterWrapper}>
        {Poster === 'N/A' ? <span>NO IMAGE</span> : <img src={Poster} alt='Poster image' />}
      </div>
      <div className={styles.textWrapper}>
        <ul>
          <li>
            {Title} ({Year})
          </li>
          <li>장르 - {Type}</li>
        </ul>
      </div>
    </button>
  );
};

export default MovieCard;
