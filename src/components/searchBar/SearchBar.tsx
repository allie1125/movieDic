import { useRecoilState } from "recoil";
import { BsSearch } from "react-icons/bs";

import styles from "./searchBar.module.scss";
import { getMovieApi } from "services/movie";
import { searchedMovieState, pageNumberState } from "states/movies";

import { useState, useEffect } from "hooks";
import useDebounce from "hooks/useDebounce";
import { ISearch } from "types/movie";

const SearchBar = () => {
  const [, setSearchedMovieList] = useRecoilState(searchedMovieState);
  const [pageNumber, setPageNumber] = useRecoilState(pageNumberState);
  const [searchKeyword, setSearchKeyword] = useState("");
  const debouncedSearch = useDebounce(searchKeyword, 500);

  useEffect(() => {
    setSearchedMovieList([]);
    setPageNumber(1);
  }, [searchKeyword]);

  useEffect(() => {
    if (debouncedSearch) {
      getMovieApi({
        s: searchKeyword,
        page: pageNumber,
      })
        .then((res) => {
          if (res?.data?.Response === "True") {
            if (pageNumber === 0) {
              setSearchedMovieList(res.data.Search);
            } else {
              res?.data?.Search?.map((el) => setSearchedMovieList((prev: ISearch[]) => [...prev, el]));
            }
          }
        })
        .catch((error) => console.error(error));
    }
  }, [debouncedSearch, pageNumber]);

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.currentTarget.value);
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchKeyword(searchKeyword);
  };

  return (
    <div className={styles.searchWrapper}>
      <div className={styles.searchBar}>
        <div>
          <BsSearch className={styles.reactIcons} />
        </div>
        <form onSubmit={submitForm}>
          <input type='type' value={searchKeyword} onChange={handleSearchInput} placeholder='영화제목 검색' />
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
