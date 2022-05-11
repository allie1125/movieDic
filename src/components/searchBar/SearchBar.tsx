import { useRecoilState } from 'recoil';
import { useState, useEffect } from 'hooks';
import { searchedMovieState } from 'state/movies';
import { BsSearch } from 'react-icons/bs';

import styles from './searchBar.module.scss';
import { getMovieApi } from 'services/movie';
import { IMovieAPIRes } from 'types/movie.d';

const SearchBar = () => {
  const [, setSearchedMovieList] = useRecoilState<IMovieAPIRes>(searchedMovieState);
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setSearchKeyword(value);

    e.preventDefault();

    getMovieApi({
      s: value,
      page: 1,
    })
      .then((res) => {
        console.log(res.data);
        if (res.data.Response === 'True') {
          setSearchedMovieList(res.data);
        }
      })
      .catch((error) => console.error(error));
  };

  const submitForm = (e: React.FormEvent) => {};

  return (
    <div className={styles.searchWrapper}>
      <div>
        <BsSearch className={styles.reactIcons} />
      </div>
      <form onSubmit={submitForm}>
        <input type='search' value={searchKeyword} onChange={handleSearchInput} placeholder='영화이름 검색' />
      </form>
    </div>
  );
};

export default SearchBar;
