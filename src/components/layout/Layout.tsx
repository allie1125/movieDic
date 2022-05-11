import { Outlet } from 'react-router-dom';

import styles from './layout.module.scss';
import SearchBar from 'components/searchBar/SearchBar';
import BottomTab from 'components/bottomTab/BottomTab';

const Layout = () => {
  return (
    <div className={styles.layoutWrapper}>
      <SearchBar />
      <main>
        <Outlet />
      </main>
      <BottomTab />
    </div>
  );
};

export default Layout;
