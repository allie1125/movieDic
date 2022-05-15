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
          <Route path='/bookMark' element={<BookMark />} />
          <Route path='*' element={<div>404 T_T</div>} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
