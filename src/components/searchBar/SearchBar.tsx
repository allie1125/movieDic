import styles from './searchBar.module.scss'
import { BsSearch } from 'react-icons/bs'

const SearchBar = () => {
  return (
    <div className={styles.searchWrapper}>
      <div>
        <BsSearch className={styles.reactIcons} />
      </div>
      <form>
        <input type='search' placeholder='영화이름 검색' />
      </form>
    </div>
  )
}

export default SearchBar
