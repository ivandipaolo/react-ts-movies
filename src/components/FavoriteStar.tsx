import { useContext, useEffect, useState } from 'react';

import { AppContext } from '@/context/AppContext';

interface Props {
  movieId?: number;
  width?: number;
}

export const FavoriteStar= ({ movieId, width}: Props) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const { state, dispatch } = useContext(AppContext);
  const { favoriteMovies } = state;

  useEffect(() => {
    setIsFavorite(favoriteMovies.value.some((favMovie) => favMovie.id === movieId))
  }, [favoriteMovies.value, movieId]);
  
  const handleAddToFavorites = (event: React.MouseEvent) => {
    event.preventDefault()
    event.stopPropagation()
    if (movieId) {
      setIsFavorite(!isFavorite);
      dispatch({type: 'TOGGLE_FAVORITE_MOVIE', payload: { id: movieId }});
    }
  };

  return (
    <button onClick={(e) => handleAddToFavorites(e)} className={`${isFavorite ? 'text-blue-600' : 'text-white'}`}>
      <svg xmlns="http://www.w3.org/2000/svg" width={`${width ?? '24'}`} height={`${width ?? '24'}`} viewBox="0 0 24 24" fill={isFavorite ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    </button>
  );
};