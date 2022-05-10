// import dayjs from 'dayjs'
import styles from './MovieDic.module.scss'

import { useMount, useState } from 'hooks'
import { getMovieApi } from 'services/movie'
import { IMovieAPIRes } from 'types/movie.d'
import MovieCard from 'components/movieCard/MovieCard'
import WeatherItem from 'routes/Weathers/Item'

const MovieDic = () => {
  const [data, setData] = useState<IMovieAPIRes>()
  useMount(() => {
    getMovieApi({
      s: 'iron man',
      page: 1,
    }).then((res) => {
      setData(res.data)
    })
  })
  if (!data) return null
  console.log(data)
  return <MovieCard />
}

export default MovieDic
