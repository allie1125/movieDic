import { atom } from 'recoil';
import { IMovieAPIRes, ISearch } from 'types/movie';

export const searchedMovieState = atom<ISearch[]>({
  key: '#searchedMovie',
  default: [],
});

export const pageNumberState = atom({
  key: '#page',
  default: 0,
});
