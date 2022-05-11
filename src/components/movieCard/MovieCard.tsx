import styles from './movieCard.module.scss';
import { useRecoilValue } from 'recoil';
import { searchedMovieState } from 'state/movies';

const MovieCard = () => {
  const movies = useRecoilValue(searchedMovieState);

  return (
    <div className={styles.cardWrapper}>
      {movies?.Search?.map(({ Title, Year, imdbID, Type, Poster }, i) => (
        <section key={imdbID} className={styles.movieCard}>
          <div className={styles.posterWrapper}>
            {Poster === 'N/A' ? <span>NO IMAGE</span> : <img src={Poster} alt='Poster image' />}
          </div>
          <div className={styles.textWrapper}>{Title}</div>
        </section>
      ))}
    </div>
  );
};

export default MovieCard;
