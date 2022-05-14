import { atom } from "recoil";
import { ISearch } from "types/movie";

export const searchedMovieState = atom<ISearch[]>({
  key: "#searchedMovie",
  default: [],
});

export const pageNumberState = atom({
  key: "#page",
  default: 0,
});

export const bookmarkedMoviesState = atom<ISearch[]>({
  key: "#bookmarkedMovie",
  default: [],
});

export const modalState = atom({
  key: "#modal",
  default: false,
});
