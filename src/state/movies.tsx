import { atom } from 'recoil';
import { IMovieAPIRes } from 'types/movie';

export const searchedMovieState = atom<IMovieAPIRes>({
  key: '#searchedMovie',
  default: {} as IMovieAPIRes,
});

export const pageNumberState = atom({
  key: '#page',
  default: 0,
});
