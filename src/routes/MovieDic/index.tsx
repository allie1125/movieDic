import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

import MovieCard from 'components/movieCard/MovieCard';
import SearchBar from 'components/searchBar/SearchBar';
import { searchedMovieState } from 'state/movies';

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
