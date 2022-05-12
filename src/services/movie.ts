import { axios } from 'hooks/worker';
import { IMovieAPIRes } from 'types/movie.d';

const { REACT_APP_API_KEY } = process.env;
const MOVIE_BASE_URL = 'http://www.omdbapi.com/?i=tt3896198&';
interface Params {
  s: string;
  page: number;
}

export const getMovieApi = (params: Params) =>
  axios.get<IMovieAPIRes>(`${MOVIE_BASE_URL}apikey=${REACT_APP_API_KEY}`, {
    params,
  });
