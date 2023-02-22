import { useState, useEffect } from 'react';
import Select from 'react-select';
import { useAppSelector } from '@/redux/hooks';
import { HorizontalLayout } from '@/components/HorizontalLayout';

interface CategoryOption {
  label: string;
  value: string;
}

const CategorySelector = () => {
  // I have to use this query because the nowPlayingMovies && popularMovies return null from movies genres
  // while movies genres cant be null.
  // [GraphQL error]: Message: Cannot return null for non-nullable field Movie.genres.
  // Location: [object Object], Path: nowPlayingMovies,movies,0,genres
  const availableGenres = useAppSelector((state) => state.genres.value)
  const allAvailableMovies = useAppSelector((state) => state.availableMovies.value)
  const selectedCategoryInitialState = {label: 'Select your favorite Genre', value: 'All'};
  const [selectedCategory, setSelectedCategory] = useState<CategoryOption>(selectedCategoryInitialState);
  const [moviesWithGenreIds, setMoviesWithGenreIds] = useState<number[]>(allAvailableMovies);
  // const genres = useAppSelector((state) => state.genres.value)
  const uniqueGenres = Array.from(new Set(availableGenres.map((movie) => movie.genres).flat()))

  useEffect(() => {
    if (selectedCategory.value !== 'All') {
      setMoviesWithGenreIds(availableGenres.filter((movie) => movie.genres.includes(selectedCategory.value)).map((movie) => movie.id))
    } else {
      setMoviesWithGenreIds(allAvailableMovies.map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allAvailableMovies, selectedCategory])
  
  return (
    <div>
      <Select
        className="lg:w-[20rem] md:w-[12em] sm:w-2 lg:ml-[3rem] md:ml-20 sm:ml-10 p-auto"
        options={uniqueGenres.map((genre) => ({ label: genre, value: genre})).sort((a, b) => a.label.localeCompare(b.label))}
        value={selectedCategory}
        onChange={(selectedOption: CategoryOption | null) => {selectedOption ? setSelectedCategory(selectedOption) : setSelectedCategory(selectedCategoryInitialState)}}
      />
      <HorizontalLayout listedIds={moviesWithGenreIds} />
    </div>
  );
};

export default CategorySelector;