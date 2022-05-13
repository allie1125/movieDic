import styles from './modal.module.scss';
import { useState, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { bookmarkedMoviesState, modalState } from 'state/movies';
import { ISearch } from 'types/movie';

interface Props {
  // openModal: boolean;
  // setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  movie: ISearch;
}

const Modal = ({ movie }: Props) => {
  const modal = useRecoilValue(modalState);
  const [bookmarkedMovies, setBookmarkedMovies] = useRecoilState(bookmarkedMoviesState);
  const [openModal, setOpenModal] = useState(modal);

  const handleCloseModal = () => {
    setOpenModal((prev) => !prev);
  };

  const handleBookmarkMovie = () => {
    setBookmarkedMovies((prev) => [...prev, movie]);
    setOpenModal((prev) => !prev);
  };

  useEffect(() => {
    console.log('bookmarkedMovies?', bookmarkedMovies);
  }, [bookmarkedMovies]);

  return (
    <div className={styles.backGround}>
      {openModal && (
        <div className={styles.content}>
          <span>즐겨찾기에 추가 하시겠습니까?</span>
          <ul>
            <li>
              <button type='button' onClick={handleBookmarkMovie}>
                확인
              </button>
              <button type='button' onClick={handleCloseModal}>
                취소
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Modal;
