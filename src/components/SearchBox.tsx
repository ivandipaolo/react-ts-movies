import { useState, ChangeEvent, FormEvent } from 'react';
import { useAppDispatch } from '@/redux/hooks';
import { setSearchValue } from '@/redux/slices/searchValueSlice';

export const SearchBox: React.FC = () => {
  const [query, setQuery] = useState('');
  const dispatch = useAppDispatch();

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    dispatch(setSearchValue(value || ''));
    setQuery(value);
  };

  return (
    <form onSubmit={handleSearch}>
      <label htmlFor="default-search" className="sr-only">
        Search
      </label>
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
          className="block p-3 pl-10 lg:p-4 lg:pl-10 lg:w-full w-[95%] text-sm text-center lg:text-start text-white bg-transparent rounded-lg border border-gray-500 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
          placeholder="Search for specific movie"
          value={query}
          onChange={handleQueryChange}
          required
        />
      </div>
    </form>
  );
};
