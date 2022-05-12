// import dayjs from 'dayjs'
import styles from './MovieDic.module.scss';

import { useEffect, useRef } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import MovieCard from 'components/movieCard/MovieCard';
import SearchBar from 'components/searchBar/SearchBar';

import { searchedMovieState, pageNumberState } from 'state/movies';
import useInfiniteScroll from 'hooks/useInfiniteScroll';

const MovieDic = () => {
  const movies = useRecoilValue(searchedMovieState);
  console.log('moviedic page - movies?', movies);
  const [, setPageNumber] = useRecoilState(pageNumberState);
  const ref = useRef(null);
  const isBottomVisible = useInfiniteScroll(ref, { threshold: 0 }, false);

  useEffect(() => {
    isBottomVisible && setPageNumber((prevCount) => prevCount + 1);
  }, [isBottomVisible]);
  return (
    <div>
      <SearchBar />
      <div className={styles.cardWrapper}>
        {movies.map((movie) => (
          <MovieCard movie={movie} key={`movie-$${movie.imdbID}`} />
        ))}
        <div ref={ref} className={styles.observerDiv} />
      </div>
    </div>
  );
};

export default MovieDic;
