import styles from './bottomTab.module.scss'
import { BsSearch, BsBookmarkStar } from 'react-icons/bs'

const BottomTab = () => {
  return (
    <div className={styles.tabWrapper}>
      <button type='button'>
        <div className={styles.active}>
          <BsSearch className={styles.reactIcons} />
          <span>검색</span>
        </div>
      </button>
      <button type='button'>
        <div className={styles.inActive}>
          <BsBookmarkStar className={styles.reactIcons} />
          <span>즐겨찾기</span>
        </div>
      </button>
    </div>
  )
}

export default BottomTab
