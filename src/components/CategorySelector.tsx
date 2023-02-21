import { Movie } from '@/graphql/queries';
import  { useState } from 'react';
import { GetLatestReleasesDocument } from '../graphql/queries';
import { useQuery } from '@apollo/client';
import Select from 'react-select';
import { useAppSelector } from '@/redux/hooks';

interface CategoryOption {
  label: string;
  value: string;
}

interface CategoryProps {
  movies: Movie[];
}

const CategorySelector = () => {
  // I have to use this query because the nowPlayingMovies && popularMovies return null from movies genres
  // while movies genres cant be null.
  // [GraphQL error]: Message: Cannot return null for non-nullable field Movie.genres.
  // Location: [object Object], Path: nowPlayingMovies,movies,0,genres
  const { loading, error, data } = useQuery(GetLatestReleasesDocument);
  const [selectedCategory, setSelectedCategory] = useState<CategoryOption | null>(null);
  const genres = useAppSelector((state) => state.genres.value)

  

  // const categories = Array.from(new Set(movies.map((movie) => movie.category))).map(
  //   (category) => ({ label: category, value: category })
  // );

  // const filteredMovies = selectedCategory
  //   ? movies.filter((movie) => movie.category === selectedCategory.value)
  //   : movies;

  if (loading) {
    //Todo add loading template to horizsontal layout
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error! {error.message}</p>
  }

  return (
    <div>
      <Select
        options={genres.map((genre) => ({ label: genre, value: genre}))}
        value={selectedCategory}
        onChange={(selectedOption: CategoryOption | null) => setSelectedCategory(selectedOption)}
      />

      <ul>
        {/* {filteredMovies.map((movie) => (
          <li key={movie.title}>
            <p>{movie.title}</p>
          </li>
        ))} */}
      </ul>
    </div>
  );
};

export default CategorySelector;