// import dayjs from 'dayjs'
import styles from './MovieDic.module.scss';

import { useMount, useState } from 'hooks';

import MovieCard from 'components/movieCard/MovieCard';
import { useRecoilValue } from 'recoil';
import { searchedMovieState } from 'state/movies';

const MovieDic = () => {
  const movies = useRecoilValue(searchedMovieState);
  console.log('moviedic page - movies?', movies);

  // const [movie, setMovie] = useState<IMovieAPIRes>();
  // useMount(() => {
  //   getMovieApi({
  //     s: 'iron man',
  //     page: 1,
  //   }).then((res) => {
  //     setMovie(res.data);
  //   });
  // });

  // if (!movie) return null;
  // console.log(movie);

  return <MovieCard />;
};

export default MovieDic;
