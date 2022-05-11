import styles from './Routes.module.scss';
import MovieDic from './MovieDic';
// import Favorite from './Favorite'
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from 'components/layout/Layout';

const App = () => {
  return (
    <div className={styles.app}>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<MovieDic />} />
              {/* <Route path='/' element={<Favorite />} /> */}
            </Route>
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
};

export default App;
