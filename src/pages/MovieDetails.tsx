import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { useAppSelector } from '@/redux/hooks';
import { RelatedMovies } from '@/components/RelatedMovies';
import { FavoriteStar } from '@/components/FavoriteStar';
import { Genres, GetMovieDetailsDocument, GetMovieDetailsQuery, GetMovieDetailsQueryVariables, Movie } from '@/graphql/queries';

export const MovieDetails = () => {
  const selectedMovieId = useAppSelector((state) => state.selectedMovie.value);
  const { loading, error, data } = useQuery<GetMovieDetailsQuery, GetMovieDetailsQueryVariables>(GetMovieDetailsDocument, {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    variables: { movieId: selectedMovieId!}
  });

  const navigate = useNavigate();
  const movieDetail = data?.movieDetail;
  const movie: Partial<Movie> | undefined | null = movieDetail;

  useEffect(() => {
    if (selectedMovieId === null) {
      navigate('/');
    }
  }, [selectedMovieId, navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className={`flex flex-col md:flex-row bg-gray-200 dark:bg-gray-800 lg:w-[90%] m-0 p-6 lg:p-5 ${movie ? 'grow' : ''}`}>
      <div className="flex-1 lg:w-1/2 lg:flex lg:flex-row lg:items-center">
        <div className="flex flex-col lg:flex-row w-full lg: mt-5 gap-2 dark:text-white text-gray-800 lg:ml-20">
          <img className="w-6/6 lg:w-5/12 object-cover rounded-md transform" src={`https://www.themoviedb.org/t/p/w440_and_h660_face${movie?.poster_path}` || ''} alt="Movie poster" />
          <div className="w-full md:w-3/6 mt-2 md:mt-4 space-y-4">
            <div className='flex flex-row gap-3 text-center justify-center bg-gray-800 rounded-md lg:p-2'>
              <h1 className="text-3xl lg:text-5xl font-semibold capitalize text-center text-white">{movie?.title}</h1>
              <FavoriteStar width={30} movieId={selectedMovieId || undefined}/>
            </div>
            <div className="flex items-start justify-center gap-3">
            {movie?.genres?.map((genre: Genres | null, i: number) => 
              <span key={i} className="mx-2 truncate dark:text-white text-gray-800 text-center">
                {genre?.name}
              </span>
            )}
            </div>
            <p className="mt-4 md:mt-6 max-w-xl">{movie?.overview}</p>
            <div className="-mx-2 flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-2 dark:text-white text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <span className="mx-2 truncate w-64 md:w-72 dark:text-white text-gray-800">
                {movie?.vote_average ? `${Math.round(movie?.vote_average)} /10` : 'No votes for this movie'}
              </span>
            </div>
            <div className="-mx-2 flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-2 dark:text-white text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span className="mx-2 w-72 truncate dark:text-white text-gray-800">{movie?.release_date}</span>
            </div>
            <RelatedMovies />
          </div>
        </div>
      </div>
    </div>
  )
}