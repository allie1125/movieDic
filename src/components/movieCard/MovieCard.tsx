import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { MdLocalMovies } from "react-icons/md";

import styles from "./movieCard.module.scss";
import Portal from "components/portal/Portal";
import Modal from "components/modal/Modal";
import { ISearch } from "types/movie";
import { searchedMovieState, bookmarkedMoviesState, modalState, pageNumberState } from "state/movies";

import useInfiniteScroll from "hooks/useInfiniteScroll";
import { getLocalStorageData, updateLocalStorageData } from "../../hooks/useLocalStorage";

const MovieCard = () => {
  const EMPTY_RESULT_TEXT = "검색결과가 없습니다.";
  const ref = useRef(null);
  const { pathname } = useLocation();
  const [openModal, setOpenModal] = useRecoilState(modalState);
  const [, setPageNumber] = useRecoilState(pageNumberState);
  const movies = useRecoilValue(searchedMovieState);
  const [bookmarkedMovies, setBookmarkedMovies] = useRecoilState(bookmarkedMoviesState);
  const [selectedMovie, setSelectedMovie] = useState<ISearch>();
  const [isAlreadyBookmarked, setIsAlreadyBookmarked] = useState(false);
  const isBottomVisible = useInfiniteScroll(ref, { threshold: 0 }, false);

  useEffect(() => {
    setBookmarkedMovies(getLocalStorageData());
  }, []);

  const handleClickMovieCard = (movie: ISearch) => {
    bookmarkedMovies?.find((el) => {
      let isBookmarked = false;
      if (el.imdbID === movie.imdbID) {
        isBookmarked = true;
        setIsAlreadyBookmarked(true);
        return isBookmarked;
      }
      setIsAlreadyBookmarked(false);
      return isBookmarked;
    });

    setSelectedMovie(movie);
    setOpenModal((prev) => !prev);
  };

  useEffect(() => {
    isBottomVisible && setPageNumber((prevCount) => prevCount + 1);
  }, [isBottomVisible]);

  return (
    <div className={styles.cardWrapper}>
      {pathname === "/" ? (
        <>
          <span className={!movies.length ? styles.emptyText : styles.off}>{EMPTY_RESULT_TEXT}</span>
          {movies.map((el, i) => (
            <button key={el.imdbID} type='button' className={styles.movieCard} onClick={() => handleClickMovieCard(el)}>
              <div className={styles.posterWrapper}>
                {el.Poster === "N/A" ? (
                  <div className={styles.noImageWrapper}>
                    <MdLocalMovies />
                  </div>
                ) : (
                  <img src={el.Poster} alt='Poster image' />
                )}
              </div>
              <div className={styles.textWrapper}>
                {bookmarkedMovies.map(
                  (bookmarkedMovie) =>
                    bookmarkedMovie.imdbID === el.imdbID && (
                      <div key={`bookmark${i}-${el.imdbID}`} className={styles.heart} />
                    )
                )}
                <ul>
                  <li>
                    {el.Title} ({el.Year})
                  </li>
                  <li>장르 - {el.Type}</li>
                </ul>
              </div>
              <Portal openModal={openModal}>
                {openModal && <Modal selectedMovie={selectedMovie} isAlreadyBookmarked={isAlreadyBookmarked} />}
              </Portal>
            </button>
          ))}
          <div ref={ref} className={!movies.length ? styles.off : styles.observerDiv} />
        </>
      ) : (
        <>
          {bookmarkedMovies.map((el, i) => (
            <button key={el.imdbID} type='button' className={styles.movieCard} onClick={() => handleClickMovieCard(el)}>
              <div className={styles.posterWrapper}>
                {el.Poster === "N/A" ? (
                  <div className={styles.noImageWrapper}>
                    <MdLocalMovies />
                  </div>
                ) : (
                  <img src={el.Poster} alt='Poster image' />
                )}
              </div>
              <div className={styles.textWrapper}>
                <div className={styles.heart} />
                <ul>
                  <li>
                    {el.Title} ({el.Year})
                  </li>
                  <li>장르 - {el.Type}</li>
                </ul>
              </div>
              <Portal openModal={openModal}>
                {openModal && <Modal selectedMovie={selectedMovie} isAlreadyBookmarked={isAlreadyBookmarked} />}
              </Portal>
            </button>
          ))}
        </>
      )}
    </div>
  );
};

export default MovieCard;
