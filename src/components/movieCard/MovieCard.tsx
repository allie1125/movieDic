import styles from './movieCard.module.scss';
import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';

import { ISearch } from 'types/movie';
import { searchedMovieState, bookmarkedMoviesState, modalState, pageNumberState } from 'state/movies';
import Portal from 'components/portal/Portal';
import Modal from 'components/modal/Modal';
import useInfiniteScroll from 'hooks/useInfiniteScroll';

const MovieCard = () => {
  const ref = useRef(null);
  const { pathname } = useLocation();
  const [openModal, setOpenModal] = useRecoilState(modalState);
  const [, setPageNumber] = useRecoilState(pageNumberState);
  const movies = useRecoilValue(searchedMovieState);
  const bookmarkedMovies = useRecoilValue(bookmarkedMoviesState);
  const [selectedMovie, setSelectedMovie] = useState<ISearch | null>(null);
  const isBottomVisible = useInfiniteScroll(ref, { threshold: 0 }, false);

  const handleClickMovieCard = (movie: ISearch) => {
    setSelectedMovie(movie);
    setOpenModal((prev) => !prev);
  };

  useEffect(() => {
    isBottomVisible && setPageNumber((prevCount) => prevCount + 1);
  }, [isBottomVisible]);

  return (
    <div className={styles.cardWrapper}>
      {pathname === '/' ? (
        <>
          {movies.map((el, i) => (
            <button key={el.imdbID} type='button' className={styles.movieCard} onClick={() => handleClickMovieCard(el)}>
              <div className={styles.posterWrapper}>
                {el.Poster === 'N/A' ? <span>NO IMAGE</span> : <img src={el.Poster} alt='Poster image' />}
              </div>
              <div className={styles.textWrapper}>
                <ul>
                  <li>
                    {el.Title} ({el.Year})
                  </li>
                  <li>장르 - {el.Type}</li>
                </ul>
              </div>
              <Portal openModal={openModal}>{openModal && <Modal selectedMovie={selectedMovie} />}</Portal>
            </button>
          ))}
          <div ref={ref} className={styles.observerDiv} />
        </>
      ) : (
        <>
          {bookmarkedMovies.map((el, i) => (
            <button key={el.imdbID} type='button' className={styles.movieCard} onClick={() => handleClickMovieCard(el)}>
              <div className={styles.posterWrapper}>
                {el.Poster === 'N/A' ? <span>NO IMAGE</span> : <img src={el.Poster} alt='Poster image' />}
              </div>
              <div className={styles.textWrapper}>
                <ul>
                  <li>
                    {el.Title} ({el.Year})
                  </li>
                  <li>장르 - {el.Type}</li>
                </ul>
              </div>
              <Portal openModal={openModal}>{openModal && <Modal selectedMovie={selectedMovie} />}</Portal>
            </button>
          ))}
        </>
      )}
    </div>
  );
};

export default MovieCard;
