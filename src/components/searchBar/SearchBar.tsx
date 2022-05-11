import { useRecoilState } from 'recoil';
import { useState, useEffect } from 'hooks';
import { BsSearch } from 'react-icons/bs';

import styles from './searchBar.module.scss';
import { getMovieApi } from 'services/movie';
import { IMovieAPIRes } from 'types/movie.d';
import { searchedMovieState, pageNumberState } from 'state/movies';
import useDebounce from 'hooks/useDebounce';

const SearchBar = () => {
  const [, setSearchedMovieList] = useRecoilState<IMovieAPIRes>(searchedMovieState);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [pageNumber, setPageNumber] = useRecoilState(pageNumberState);
  const debouncedSearch = useDebounce(searchKeyword, 500);

  useEffect(() => {
    if (debouncedSearch) {
      getMovieApi({
        s: searchKeyword,
        page: pageNumber,
      })
        .then((res) => {
          console.log(res.data);
          if (res.data.Response === 'True') {
            setSearchedMovieList(res.data);
          }
        })
        .catch((error) => console.error(error));
    }
  }, [debouncedSearch, pageNumber]);

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.currentTarget.value);
  };

  return (
    <div className={styles.searchWrapper}>
      <div>
        <BsSearch className={styles.reactIcons} />
      </div>
      <form>
        <input type='search' value={searchKeyword} onChange={handleSearchInput} placeholder='영화이름 검색' />
      </form>
    </div>
  );
};

export default SearchBar;
