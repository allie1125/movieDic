import { NavLink } from "react-router-dom";
import { BsSearch, BsBookmarkStar } from "react-icons/bs";

import styles from "./bottomTab.module.scss";

const BottomTab = () => {
  return (
    <div className={styles.tabWrapper}>
      <button type='button'>
        <NavLink to='/' className={({ isActive }) => (isActive ? styles.active : styles.inActive)}>
          <div>
            <BsSearch className={styles.reactIcons} />
            <span>검색</span>
          </div>
        </NavLink>
      </button>
      <button type='button'>
        <NavLink to='/bookMark' className={({ isActive }) => (isActive ? styles.active : styles.inActive)}>
          <div>
            <BsBookmarkStar className={styles.reactIcons} />
            <span>즐겨찾기</span>
          </div>
        </NavLink>
      </button>
    </div>
  );
};

export default BottomTab;
