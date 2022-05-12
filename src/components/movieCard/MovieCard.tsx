import styles from './movieCard.module.scss';

import { useEffect, useRef } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { searchedMovieState, pageNumberState } from 'state/movies';
import useInfiniteScroll from 'hooks/useInfiniteScroll';

const MovieCard = () => {
  const movies = useRecoilValue(searchedMovieState);
  const [pageNumber, setPageNumber] = useRecoilState(pageNumberState);
  const ref = useRef(null);
  const isBottomVisible = useInfiniteScroll(ref, { threshold: 0 }, false);

  useEffect(() => {
    isBottomVisible && setPageNumber((prevCount) => prevCount + 1);
  }, [isBottomVisible]);

  useEffect(() => {
    console.log('pageNumber', pageNumber);
  }, [pageNumber]);

  return (
    <div className={styles.cardWrapper}>
      {movies?.Search?.map(({ Title, Year, imdbID, Type, Poster }, i) => (
        <section key={`movie-${i}${imdbID}`} className={styles.movieCard}>
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
        </section>
      ))}
      <div ref={ref} className={styles.observerDiv} />
    </div>
  );
};

export default MovieCard;
