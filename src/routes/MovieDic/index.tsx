import { Suspense } from "react";

import styles from "./movieDic.module.scss";
import MovieCard from "components/movieCard/MovieCard";
import SearchBar from "components/searchBar/SearchBar";

const MovieDic = () => {
  return (
    <div>
      <Suspense fallback={<h1 style={{ color: "red" }}>is loading</h1>}>
        <SearchBar />
      </Suspense>
      <MovieCard />
    </div>
  );
};

export default MovieDic;
