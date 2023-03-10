import { useAppSelector } from '@/redux/hooks';
import { HorizontalLayout } from '@/components/HorizontalLayout';
import { RelatedMovies } from './RelatedMovies';

export const SearchSection: React.FC = () => {
  const searchedMovies = useAppSelector(state => state.searchedMovies.value);
  const favoriteMovies = useAppSelector(state => state.favoriteMovies.value);

  return (
    <div>
        { favoriteMovies[0] 
          && <>
              <h2 className='m-2 text-center'>
                Here are some related movies based on your favorite ones.
              </h2>
              <RelatedMovies movieId={favoriteMovies[0].id}/>
            </> 
        }
        <HorizontalLayout title={searchedMovies.length > 0 ? `Results for your search:` : 'Here are some recommendations:'} listedIds={searchedMovies} />
    </div>
  );
};
