// import dayjs from 'dayjs'
import styles from './MovieDic.module.scss';

import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import MovieCard from 'components/movieCard/MovieCard';
import SearchBar from 'components/searchBar/SearchBar';

import { searchedMovieState, pageNumberState } from 'state/movies';

const MovieDic = () => {
  const movies = useRecoilValue(searchedMovieState);

  useEffect(() => {
    console.log('movies?', movies);
  }, [movies]);

  return (
    <div>
      <SearchBar />
      <MovieCard />
    </div>
  );
};

export default MovieDic;
