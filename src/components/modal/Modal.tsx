import { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import styles from "./modal.module.scss";
import { bookmarkedMoviesState, modalState, searchedMovieState } from "state/movies";

interface Props {
  selectedMovie: any;
  isAlreadyBookmarked: boolean;
}

const Modal = ({ selectedMovie, isAlreadyBookmarked }: Props) => {
  const modal = useRecoilValue(modalState);
  const movies = useRecoilValue(searchedMovieState);
  const [bookmarkedMovies, setBookmarkedMovies] = useRecoilState(bookmarkedMoviesState);
  const [openModal, setOpenModal] = useState(modal);

  const handleCloseModal = () => {
    setOpenModal((prev) => !prev);
  };

  const handleBookmarkMovie = () => {
    if (isAlreadyBookmarked) {
      const newList = bookmarkedMovies.filter((el) => el.imdbID !== selectedMovie.imdbID);
      setBookmarkedMovies(newList);
    } else {
      setBookmarkedMovies((prev: any) => [...prev, selectedMovie]);
    }
    setOpenModal((prev) => !prev);
  };

  return (
    <div className={styles.backGround}>
      {openModal && (
        <div className={styles.content}>
          <div>
            <img src={selectedMovie.Poster} alt={`Movie Poster of ${selectedMovie.Title}`} />
            <span>
              {selectedMovie.Title}({selectedMovie.Year})
            </span>
            <span>즐겨찾기에{isAlreadyBookmarked ? "서 제거" : " 추가"} 하시겠습니까?</span>
          </div>
          <ul>
            <li>
              <button type='button' onClick={handleCloseModal}>
                취소
              </button>
              <button type='button' onClick={handleBookmarkMovie}>
                확인
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Modal;
