import { useState, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setSearchValue } from '@/redux/slices/searchValueSlice';

export const SearchBox = () => {
  const [query, setQuery] = useState('');
  const dispatch = useAppDispatch()

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(event.target.value || ''));
    setQuery(event.target.value);
  }

  return (
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
        className="block p-4 pl-10 w-full text-sm text-white bg-transparent rounded-lg border border-gray-500 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none"
        placeholder="Search for specific movie"
        value={query}
        onChange={handleQueryChange}
        required
      />
    </div>
  </form>
  )
}