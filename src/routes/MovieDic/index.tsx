// import dayjs from 'dayjs'
import styles from './MovieDic.module.scss';

import { useEffect, useRef, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import MovieCard from 'components/movieCard/MovieCard';
import SearchBar from 'components/searchBar/SearchBar';

import { searchedMovieState, pageNumberState } from 'state/movies';
import useInfiniteScroll from 'hooks/useInfiniteScroll';

const MovieDic = () => {
  const movies = useRecoilValue(searchedMovieState);
  const [, setPageNumber] = useRecoilState(pageNumberState);
  const ref = useRef(null);
  const isBottomVisible = useInfiniteScroll(ref, { threshold: 0 }, false);

  useEffect(() => {
    console.log('movies?', movies);
  }, [movies]);

  useEffect(() => {
    isBottomVisible && setPageNumber((prevCount) => prevCount + 1);
  }, [isBottomVisible]);

  return (
    <div>
      <SearchBar />
      <div className={styles.cardWrapper}>
        {movies.map((movie, i) => (
          <MovieCard movie={movie} key={`movie-${i}${movie.imdbID}`} />
        ))}
        <div ref={ref} className={styles.observerDiv} />
      </div>
    </div>
  );
};

export default MovieDic;
