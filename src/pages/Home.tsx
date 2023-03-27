import { useContext, useEffect, useRef } from 'react';

import { useQuery } from '@apollo/client';
import { GetAvailableMoviesDocument, Movie } from '@/graphql/queries';

import { AppContext } from '@/context/AppContext';
import { SearchSection } from '@/components/SearchSection';
import { CategorySection } from '@/components/CategorySection';
import { LatestReleasesSection } from '@/components/LatestReleasesSection';

export const Home = () => {
  const availableMoviesIds = useRef<number[]>([]);
  const { loading, error, data } = useQuery(GetAvailableMoviesDocument);

  const { state, dispatch } = useContext(AppContext);
  const { searchedMovies, favoriteMovies } = state;

  useEffect(() => {
    if (!loading && !error && data) {
      availableMoviesIds.current = (data.nowPlayingMovies.concat(data.popularMovies)).map((movie: Movie) => movie.id);
      dispatch({type: 'SET_AVAILABLE_MOVIES', payload: availableMoviesIds.current});
    }
  }, [loading, error, data, dispatch]);

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {searchedMovies.value.movies.length > 0 || (searchedMovies.value.noResults && favoriteMovies.value[0]) ? (
        <SearchSection />
      ) : (
        <LatestReleasesSection />
      )}
      <CategorySection />
    </div>
  );
};
