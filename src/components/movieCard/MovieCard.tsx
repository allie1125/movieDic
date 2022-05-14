import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";

import styles from "./movieCard.module.scss";
import Portal from "components/portal/Portal";
import Modal from "components/modal/Modal";
import { ISearch } from "types/movie";
import { searchedMovieState, bookmarkedMoviesState, modalState, pageNumberState } from "state/movies";

import useInfiniteScroll from "hooks/useInfiniteScroll";
import { getLocalStorageData } from "hooks/useLocalStorage";

const MovieCard = () => {
  const INIT_BOOKMARK = [
    {
      data: {
        bookMarks: [
          {
            id: "tt0120744",
            isBookmarked: true,
          },
          {
            id: "tt10633456",
            isBookmarked: false,
          },
        ],
      },
    },
  ];
  const EMPTY_RESULT_TEXT = "검색결과가 없습니다.";
  const ref = useRef(null);
  const { pathname } = useLocation();
  const [openModal, setOpenModal] = useRecoilState(modalState);
  const [, setPageNumber] = useRecoilState(pageNumberState);
  const movies = useRecoilValue(searchedMovieState);
  const bookmarkedMovies = useRecoilValue(bookmarkedMoviesState);
  const [selectedMovie, setSelectedMovie] = useState<ISearch | null>(null);
  const [isAlreadyBookmarked, setIsAlreadyBookmarked] = useState(false);
  const isBottomVisible = useInfiniteScroll(ref, { threshold: 0 }, false);

  useEffect(() => {
    window.localStorage.setItem("movieDic", JSON.stringify(INIT_BOOKMARK));
  }, []);

  useEffect(() => {
    console.log(bookmarkedMovies);
  }, [bookmarkedMovies]);

  const handleClickMovieCard = (movie: ISearch) => {
    setSelectedMovie(movie);
    checkAlreadyBookmarked(movie);
    setOpenModal((prev) => !prev);
  };

  const checkAlreadyBookmarked = (movie: ISearch) => {
    bookmarkedMovies.find((el) =>
      el.imdbID === movie.imdbID ? setIsAlreadyBookmarked(true) : setIsAlreadyBookmarked(false)
    );
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
                {el.Poster === "N/A" ? <span>NO IMAGE</span> : <img src={el.Poster} alt='Poster image' />}
              </div>
              <div className={styles.textWrapper}>
                {bookmarkedMovies.map(
                  (bookmarkedMovie) => bookmarkedMovie.imdbID === el.imdbID && <div className={styles.heart} />
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
                {el.Poster === "N/A" ? <span>NO IMAGE</span> : <img src={el.Poster} alt='Poster image' />}
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
