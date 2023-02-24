import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';

import { addMovies } from '@/redux/slices/availableMoviesSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

import { CategorySection } from '@/components/CategorySection';
import { LatestReleasesSection } from '@/components/LatestReleasesSection';
import { SearchSection } from '@/components/SearchSection';

import { GetAvailableMoviesDocument, Movie } from '@/graphql/queries';

export const Home = () => {
  const searchBoxValue = useAppSelector((state) => state.searchValue.value)
  const availableMoviesFromReducer = useAppSelector((state) => state.availableMovies.value)
  const [availableMoviesIds, setAvailableMoviesIds] = useState([])
  const { loading, error, data } = useQuery(GetAvailableMoviesDocument);
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (data && availableMoviesFromReducer !== availableMoviesIds) {
      setAvailableMoviesIds(data.nowPlayingMovies.concat(data.popularMovies).map((movie: Movie) => movie.id));
      dispatch(addMovies(availableMoviesIds));
    }
  }, [dispatch, data, availableMoviesFromReducer, availableMoviesIds]);
  return (
  <div>
    {
      searchBoxValue.trim() !== ''
      ?
        <SearchSection />
      :
        <LatestReleasesSection />
      }
      <CategorySection />
  </div>
  )
}