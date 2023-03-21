import { useAppSelector } from '@/redux/hooks';
import { HorizontalLayout } from '@/components/HorizontalLayout';
import { RelatedMovies } from './RelatedMovies';

export const SearchSection: React.FC = () => {
  const searchedMovies = useAppSelector(state => state.searchedMovies.value);
  const favoriteMovies = useAppSelector(state => state.favoriteMovies.value);
  return (
    <div>
      { 
        (favoriteMovies[0] && searchedMovies.noResults) &&
          <RelatedMovies title="Based on your favorites:" movieId={favoriteMovies[0].id}/>
      }
      {
        searchedMovies.movies.length > 0 
        ? <HorizontalLayout title={`Results for your search:`} listedIds={searchedMovies.movies} />
        : <></>
      }
    </div>
  );
};
