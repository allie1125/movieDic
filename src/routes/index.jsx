import styles from './Routes.module.scss'
import MovieDic from './MovieDic'
// import Favorite from './Favorite'
import { RecoilRoot } from 'recoil'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SearchBar from '../components/searchBar/SearchBar'
import BottomTab from '../components/bottomTab/BottomTab'

const App = () => {
  return (
    <div className={styles.app}>
      <RecoilRoot>
        <SearchBar />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MovieDic />} />
            {/* <Route path='/' element={<Favorite />} /> */}
          </Routes>
        </BrowserRouter>
        <BottomTab />
      </RecoilRoot>
    </div>
  )
}

export default App
