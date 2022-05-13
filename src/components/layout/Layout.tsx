import { Outlet } from "react-router-dom";

import styles from "./layout.module.scss";
import BottomTab from "components/bottomTab/BottomTab";

const Layout = () => {
  return (
    <div className={styles.layoutWrapper}>
      <header>MOVIEDIC</header>
      <main>
        <Outlet />
      </main>
      <BottomTab />
    </div>
  );
};

export default Layout;
