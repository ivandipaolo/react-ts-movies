import { useState, useEffect } from 'react';
import { useAppSelector } from '@/redux/hooks';
import { HorizontalLayout } from '@/components/HorizontalLayout';

export const SearchSection: React.FC = () => {
  const availableMovies = useAppSelector(state => state.detailedMovies.value);
  const availableMoviesIds = useAppSelector(state => state.availableMovies.value);
  const searchBoxValue = useAppSelector(state => state.searchValue.value);
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
      {noResults && (
        <div>
          <h2>
            There are no results for: <span>{searchBoxValue}</span>
          </h2>
          {/* TODO: Check if user has favorite movies and suggest similar ones */}
          <h2>Here are some similar movies based on your favorite movies.</h2>
        </div>
      )}
      </div>
      <HorizontalLayout title={!noResults ? `Results for: ${searchBoxValue}` : 'Some recommendations:'} listedIds={moviesToDisplay} />
    </div>
  );
};
