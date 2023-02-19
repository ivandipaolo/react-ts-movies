import React from 'react';
// import { Movie } from '../types';

type Movie = {
  poster: string;
  title: string;
  overview: string;
  price: string;
}

type MovieCardProps = {
  movie: Movie;
  onAddToFavorites: (movie: Movie) => void;
};

const MovieCard: React.FC<MovieCardProps> = ({ onAddToFavorites }) => {
  const movie: Movie = {
    poster: 'a',
    title: 'b',
    overview: 'c',
    price: 'd'
  }
  const handleAddToFavorites = () => {
    onAddToFavorites(movie);
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img className="w-full h-48 object-cover" src={movie.poster} alt={movie.title} />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{movie.title}</h2>
        <p className="text-gray-700 text-base">{movie.overview}</p>
        <div className="mt-4 flex justify-between items-center">
          <button onClick={handleAddToFavorites} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add to favorites
          </button>
          <span className="text-gray-700 font-bold text-xl">${movie.price}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;