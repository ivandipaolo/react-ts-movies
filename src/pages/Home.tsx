import { useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { addMovies } from '@/redux/slices/availableMoviesSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

import { CategorySection } from '@/components/CategorySection';
import { LatestReleasesSection } from '@/components/LatestReleasesSection';
import { SearchSection } from '@/components/SearchSection';

import { GetAvailableMoviesDocument, Movie } from '@/graphql/queries';

export const Home = () => {
  const searchBoxValue = useAppSelector((state) => state.searchValue.value)
  const { loading, error, data } = useQuery(GetAvailableMoviesDocument);
  const dispatch = useAppDispatch()
  let availableMoviesIds;
  useEffect(() => {
    if (data) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      availableMoviesIds = (data.nowPlayingMovies.movies.concat(data.popularMovies.movies)).map((movie: Movie) => movie.id);
      dispatch(addMovies(availableMoviesIds));
    }
  }, [dispatch, data]);
  return (
  <div>
    {
      searchBoxValue.trim() !== ''
      ?
        <SearchSection />
      :
      <>
        <LatestReleasesSection />
        <CategorySection />
      </>
    }
  </div>
  )
}