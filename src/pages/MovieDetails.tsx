import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { useAppSelector } from '@/redux/hooks';
import { GetMovieDetailsDocument, GetMovieDetailsQuery, GetMovieDetailsQueryVariables, Movie} from '@/graphql/queries';

export const MovieDetails = () => {
  const selectedMovieId = useAppSelector((state) => state.selectedMovie.value);

  const { loading, error, data } = useQuery<GetMovieDetailsQuery, GetMovieDetailsQueryVariables>(GetMovieDetailsDocument, {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    variables: { movieId: selectedMovieId!}
  });

  const navigate = useNavigate();

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

  const movieDetail = data?.movieDetail;
  const movie: Partial<Movie> | undefined | null = movieDetail?.movie;


  return (
    <div className="container bg-gray-200 m-24 p-10 flex flex-col px-20">
      <div className="flex-1 lg:-mx-6 lg:flex lg:items-center">
        <div className="dark:text-white text-gray-800 lg:mx-6 lg:w-1/2">
            <h1 className="text-3xl font-semibold capitalize lg:text-5xl">{movie?.original_title}</h1>
            <p className="mt-6 max-w-xl">{movie?.overview}</p>
            <div className="mt-6 space-y-8 md:mt-8">
            <p className="-mx-2 flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="mx-2 h-6 w-6 dark:text-white text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
                <span className="mx-2 w-72 truncate dark:text-white text-gray-800"> {movie?.vote_average}/10 stars into {movie?.vote_count} votes </span>
            </p>
            <p className="-mx-2 flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="mx-2 h-6 w-6 dark:text-white text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                <span className="mx-2 w-72 truncate dark:text-white text-gray-800">{movie?.release_date}</span>
            </p>
            <p className="-mx-2 flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="mx-2 h-6 w-6 dark:text-white text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span className="mx-2 w-72 truncate dark:text-white text-gray-800">{movie?.release_date}</span>
            </p>
            </div>
        </div>
        <img className="object-cover transform rounded-md" src={`https://www.themoviedb.org/t/p/w440_and_h660_face${movie?.poster_path}` || ''} alt='Movie poster.'/>
      </div>
    </div>
  )
}