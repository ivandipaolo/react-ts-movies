import MovieCard from '@/components/MovieCard'
import {LatestReleases} from '../components/LatestReleases'

export const Home = () => {

  return (
    <>
      <LatestReleases/>
      <MovieCard movieId={200}/>
    </>
  )
}