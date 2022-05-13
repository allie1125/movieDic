import styles from './movieCard.module.scss';
import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { ISearch } from 'types/movie';
import { modalState } from 'state/movies';
import Portal from 'components/portal/Portal';
import Modal from 'components/modal/Modal';

interface Props {
  movie: ISearch;
}
const MovieCard = ({ movie }: Props) => {
  const { Title, Year, imdbID, Type, Poster } = movie;
  const [openModal, setOpenModal] = useRecoilState(modalState);

  const handleClickMovieCard = () => {
    setOpenModal((prev) => !prev);
  };

  useEffect(() => {
    console.log('movie card - open modal', openModal);
  }, [openModal]);

  return (
    <button type='button' className={styles.movieCard} onClick={handleClickMovieCard}>
      <div className={styles.posterWrapper}>
        {Poster === 'N/A' ? <span>NO IMAGE</span> : <img src={Poster} alt='Poster image' />}
      </div>
      <div className={styles.textWrapper}>
        <ul>
          <li>
            {Title} ({Year})
          </li>
          <li>장르 - {Type}</li>
        </ul>
      </div>
      <Portal openModal={openModal}>{openModal && <Modal movie={movie} />}</Portal>
    </button>
  );
};

export default MovieCard;
