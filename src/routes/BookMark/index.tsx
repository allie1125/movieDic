import MovieCard from "components/movieCard/MovieCard";
import styles from "./bookMark.module.scss";

const Bookmark = () => {
  return (
    <div>
      <h1 className={styles.title}>내 즐겨찾기</h1>
      <MovieCard />
    </div>
  );
};

export default Bookmark;
