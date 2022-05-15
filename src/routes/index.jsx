import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import styles from "./routes.module.scss";
import MovieDic from "./MovieDic";
import BookMark from "./BookMark";
import Layout from "components/layout/Layout";

import { initLocalStorageData } from "hooks/useLocalStorage";
// import

const App = () => {
  useEffect(() => {
    initLocalStorageData();
  }, []);

  return (
    <div className={styles.app}>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<MovieDic />} />
          <Route path='/bookMark' element={<BookMark />} />
          <Route path='*' element={<div>404 T_T</div>} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
