import styles from './movieCard.module.scss';
import { useState } from 'hooks';
import { useRecoilValue } from 'recoil';
import { searchedMovieState } from 'state/movies';

const MovieCard = () => {
  const movies = useRecoilValue(searchedMovieState);
  console.log('movies?', movies);
  return (
    <div className={styles.cardWrapper}>
      {movies?.Search?.map(({ Title, Year, imdbID, Type }, i) => (
        <section key={imdbID} className={styles.movieCard}>
          <div className={styles.posterWrapper}>{Title}</div>
          <div className={styles.textWrapper}>{Year}</div>
        </section>
      ))}
    </div>
  );
};

export default MovieCard;
