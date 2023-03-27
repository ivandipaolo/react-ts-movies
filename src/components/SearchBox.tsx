import { 
  useState,
  ChangeEvent,
  FormEvent,
  useEffect, 
  useContext
} from 'react';
  
import { useNavigate } from 'react-router-dom';
import { AppContext } from '@/context/AppContext';

export const SearchBox = () => {
  const [query, setQuery] = useState('');
  const [filteredMovies, setFilteredMovies] = useState<number[]>([]);
  const navigate = useNavigate();
  const { state, dispatch } = useContext(AppContext);
  const { detailedMovies: { value: availableMovieValue } } = state;

  const noResultsFound = query.length > 0 && filteredMovies.length === 0;

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    navigate('/');
    setQuery(value);

    if (value.length > 0) {
      setFilteredMovies(
        availableMovieValue
          .filter((movie) =>
            movie.name.toLowerCase().includes(value.toLowerCase())
          )
          .map((movie) => movie.id)
      );
    } else {
      setFilteredMovies([]);
    }
  };

  useEffect(() => {
    dispatch({type:'SET_SEARCHED_MOVIES', payload: {movies: filteredMovies, noResults: noResultsFound}});
  }, [dispatch, filteredMovies, noResultsFound]);

  return (
    <form onSubmit={handleSearch}>
      <div className="relative flex justify-center items-center">
        <div className="flex absolute inset-y-0 left-0 items-center pl-5 lg:pl-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className={`block text-start p-3 pl-10 h-9 lg:h-12 lg:p-4 lg:pl-10 lg:w-full w-[95%] text-sm align-middle ease-in-out duration-300 transform transition-all lg:text-start text-white bg-transparent rounded-lg border focus:ring-blue-500  focus:outline-none ${noResultsFound ? 'border-red-500 focus:border-red-500' : 'border-gray-500 focus:border-blue-500'}`}
          placeholder="Search for specific movie"
          value={query}
          onChange={handleQueryChange}
          required
        />
      </div>
      <p
        className={`text-red-500 text-xs pl-3 text-start lg:text-sm lg:pt-2 lg:pl-2 ease-in-out duration-300 transform transition-all ${
          noResultsFound ? 'block' : 'hidden'
        }`}
      >
        No results found matching: {query.length > 8 ? `${query.substring(0, 8)}...` : query}
      </p>
    </form>
  );
};
