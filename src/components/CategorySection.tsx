import { useState, useEffect } from 'react';
import { useAppSelector } from '@/redux/hooks';

import Select from 'react-select';
import { HorizontalLayout } from '@/components/HorizontalLayout';

interface CategoryOption {
  label: string;
  value: string;
}

export const CategorySection = () => {
  // I have to use this query because the nowPlayingMovies && popularMovies return null from movies genres
  // while movies genres cant be null.
  // [GraphQL error]: Message: Cannot return null for non-nullable field Movie.genres.
  // Location: [object Object], Path: nowPlayingMovies,movies,0,genres
  const availableMoviesWGenres = useAppSelector((state) => state.detailedMovies.value)
  const allAvailableMovies = useAppSelector((state) => state.availableMovies.value)
  const selectedCategoryInitialState = {label: 'Select a Genre', value: 'All'};

  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<CategoryOption>(selectedCategoryInitialState);
  const [moviesWithGenreIds, setMoviesWithGenreIds] = useState<number[]>(allAvailableMovies);
  
  const uniqueGenres = Array.from(new Set(availableMoviesWGenres.map((movie) => movie.genres).flat()))

  useEffect(() => {
    setIsVisible(true);
    setMoviesWithGenreIds(allAvailableMovies.map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value));
  }, [allAvailableMovies]);
  
  const handleCategoryChange = (selectedOption: CategoryOption | null) => {
    selectedOption ? setSelectedCategory(selectedOption) : setSelectedCategory(selectedCategoryInitialState);
    if (selectedCategory.value !== 'All') {
      setMoviesWithGenreIds(availableMoviesWGenres.filter((movie) => movie.genres.includes(selectedCategory.value)).map((movie) => movie.id))
    } else {
      setMoviesWithGenreIds(allAvailableMovies.map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value));
    }
  }

  return (
    <div className={`duration-300 ease-in-out transform transition-all" ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
      <h1 className="flex py-4 lg:px-3 md:px-10 sm:px-2 lg:mx-8 md:mx-10 mx-5 font-bold text-2xl lg:text-4xl dark:text-white text-gray-700">
        Filter by genre:
      </h1>
      <Select
        className="lg:max-w-2xl w-3/4 lg:ml-10 sm:ml-1 ml-2 p-auto"
        options={uniqueGenres.map((genre) => ({ label: genre, value: genre})).sort((a, b) => a.label.localeCompare(b.label))}
        value={selectedCategory}
        onChange={handleCategoryChange}
      />
      <HorizontalLayout listedIds={moviesWithGenreIds} />
    </div>
  );
};

