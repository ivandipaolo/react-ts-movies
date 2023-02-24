import { useState, useEffect } from 'react';
import { useAppSelector } from '@/redux/hooks';
import { HorizontalLayout } from '@/components/HorizontalLayout';
import { RelatedMovies } from './RelatedMovies';

export const SearchSection: React.FC = () => {
  const availableMovies = useAppSelector(state => state.detailedMovies.value);
  const availableMoviesIds = useAppSelector(state => state.availableMovies.value);
  const searchBoxValue = useAppSelector(state => state.searchValue.value);
  const favoriteMovies = useAppSelector(state => state.favoriteMovies.value);
  const [noResults, setNoResults] = useState<boolean>(false);
  const [moviesToDisplay, setMoviesToDisplay] = useState<number[]>([]);

  useEffect(() => {
    setMoviesToDisplay(availableMoviesIds);
  }, [availableMoviesIds]);

  useEffect(() => {
    const filteredMovies = availableMovies.filter(movie =>
      movie.name.toLowerCase().includes(searchBoxValue.toLowerCase())
    );

    if (filteredMovies.length > 0) {
      setNoResults(false);
      setMoviesToDisplay(filteredMovies.map(movie => movie.id));
    } else {
      setNoResults(true);
      setMoviesToDisplay(availableMoviesIds);
    }
  }, [availableMovies, availableMoviesIds, searchBoxValue]);

  

  return (
    <div>
      <div className="max-w-2xl mx-auto">
      { noResults &&
        <>
          <div className='m-2 text-center'>
            <h2>
              There are no results for: <span>{searchBoxValue}</span>
            </h2>
          </div>
          { favoriteMovies[0] 
            ? <>
              <h2 className='m-2 text-center'>
                Here are some related movies based on your favorite ones.
              </h2>
              <RelatedMovies movieId={favoriteMovies[0].id}/>
            </> 
            : <HorizontalLayout title={!noResults ? `Results for: ${searchBoxValue}` : 'Some recommendations:'} listedIds={moviesToDisplay} />
          }
        </>
        }
      </div>
    </div>
  );
};
