import { useEffect, useRef } from 'react';

import { useQuery } from '@apollo/client';
import { addMovies } from '@/redux/slices/availableMoviesSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { GetAvailableMoviesDocument, Movie } from '@/graphql/queries';

import { SearchSection } from '@/components/SearchSection';
import { CategorySection } from '@/components/CategorySection';
import { LatestReleasesSection } from '@/components/LatestReleasesSection';

export const Home = () => {
  const searchedMovies = useAppSelector((state) => state.searchedMovies.value);
  const favoriteMovies = useAppSelector((state) => state.favoriteMovies.value);
  const dispatch = useAppDispatch();
  const availableMoviesIds = useRef<number[]>([]);
  const { loading, error, data } = useQuery(GetAvailableMoviesDocument);

  useEffect(() => {
    if (!loading && !error && data) {
      availableMoviesIds.current = (data.nowPlayingMovies.concat(data.popularMovies)).map((movie: Movie) => movie.id);
      dispatch(addMovies(availableMoviesIds.current));
    }
  }, [loading, error, data, dispatch]);

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {searchedMovies.movies.length > 0 || (searchedMovies.noResults && favoriteMovies[0]) ? (
        <SearchSection />
      ) : (
        <LatestReleasesSection />
      )}
      <CategorySection />
    </div>
  );
};
