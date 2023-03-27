import { useContext } from 'react';

import { RelatedMovies } from '@/components/RelatedMovies';
import { HorizontalLayout } from '@/components/HorizontalLayout';
import { AppContext } from '@/context/AppContext';

export const SearchSection: React.FC = () => {

  const { state } = useContext(AppContext);
  const { searchedMovies, favoriteMovies } = state;

  return (
    <div>
      { 
        (favoriteMovies.value[0] && searchedMovies.value.noResults) &&
          <RelatedMovies title="Based on your favorites:" movieId={favoriteMovies.value[0].id}/>
      }
      {
        searchedMovies.value.movies.length > 0 
        ? <HorizontalLayout title={`Results for your search:`} listedIds={searchedMovies.value.movies} />
        : <></>
      }
    </div>
  );
};
