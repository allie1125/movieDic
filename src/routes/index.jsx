import styles from "./routes.module.scss";
import MovieDic from "./MovieDic";
import BookMark from "./BookMark";
import { Routes, Route } from "react-router-dom";

import Layout from "components/layout/Layout";

const App = () => {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MovieDic />} />
          <Route path='bookMark' element={<BookMark />} />
        </Route>
        <Route path='*' element={<div>404</div>} />
      </Routes>
    </div>
  );
};

export default App;
