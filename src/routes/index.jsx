import styles from './Routes.module.scss'
import MovieDic from './MovieDic'
import { RecoilRoot } from 'recoil'

const App = () => {
  return (
    <div className={styles.app}>
      <RecoilRoot>
        <MovieDic />
      </RecoilRoot>
    </div>
  )
}

export default App
