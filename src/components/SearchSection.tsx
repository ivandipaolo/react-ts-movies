import { useState, useEffect } from 'react';
import { useAppSelector } from '@/redux/hooks';
import { HorizontalLayout } from './HorizontalLayout';

export const SearchSection = () => {
  const availableMovies = useAppSelector((state) => state.detailedMovies.value)
  const availableMoviesIds = useAppSelector((state) => state.availableMovies.value)
  const searchBoxFromSlice = useAppSelector((state) => state.searchValue.value)
  const [noResults, setNoResults] = useState(false);
  const [query, setQuery] = useState('');
  const [searchBoxValue, setSearchBoxValue] = useState<number[]>([]);

  useEffect(() => {
    setSearchBoxValue(availableMoviesIds);
  }, [availableMoviesIds])
  

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    if(availableMovies.filter((movie) => movie.name.toLowerCase().includes(event.target.value.toLowerCase())).length > 0) {
      setNoResults(false)
      setSearchBoxValue(availableMovies.filter((movie) =>  movie.name.toLowerCase().includes(event.target.value.toLowerCase())).map((movie) => movie.id))
    } else {
      setNoResults(true)
      setSearchBoxValue(availableMoviesIds);
    }
  }

  return (
    <>
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSearch}>
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">
            Search
          </label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none"
              placeholder="Search for specific movie"
              value={query}
              onChange={handleQueryChange}
              required
            />
          </div>
        </form>
      {
        noResults
        ? <div>
            <h2>There is no results for:<span>{query}</span></h2>
            {/*Todo: Condicion para ver si tiene favoritas o no, si tiene hacer similar movies*/}
            <h2>Here you have some similar movies based on your favorite movies.</h2>
          </div>
        : <></>
      }
      </div>
      <HorizontalLayout listedIds={searchBoxValue}/>
    </>
  );
};
