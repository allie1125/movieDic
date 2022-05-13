import { useState, useEffect } from 'react';

import { useRecoilState, useRecoilValue } from 'recoil';
import { bookmarkedMoviesState, modalState } from 'state/movies';

const Bookmark = () => {
  const [bookmarkedMovies, setBookmarkedMovies] = useRecoilState(bookmarkedMoviesState);

  useEffect(() => {
    console.log('bookmark - bookmarkedMovies?', bookmarkedMovies);
  }, [bookmarkedMovies]);
  return <div>sdf</div>;
};

export default Bookmark;
