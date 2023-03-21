import { useEffect, useRef } from 'react'
import { useQuery } from '@apollo/client';

import { addMovies } from '@/redux/slices/availableMoviesSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

import { CategorySection } from '@/components/CategorySection';
import { LatestReleasesSection } from '@/components/LatestReleasesSection';
import { SearchSection } from '@/components/SearchSection';

import { GetAvailableMoviesDocument, Movie } from '@/graphql/queries';

export const Home = () => {
  const searchedMovies = useAppSelector((state) => state.searchedMovies.value)
  const favoriteMovies = useAppSelector(state => state.favoriteMovies.value);
  const { loading, error, data } = useQuery(GetAvailableMoviesDocument);
  const dispatch = useAppDispatch()
  const availableMoviesIds = useRef<number[]>([]);
  useEffect(() => {
    if (data) {
      availableMoviesIds.current = (data.nowPlayingMovies.concat(data.popularMovies)).map((movie: Movie) => movie.id);
      dispatch(addMovies(availableMoviesIds.current));
    }
  }, [dispatch, data]);
  return (
    <div>
    {
      (searchedMovies.movies.length > 0 || (searchedMovies.noResults && favoriteMovies[0]))
      ? <SearchSection />
      : <LatestReleasesSection />
    }
      <CategorySection />
  </div>
  )
}