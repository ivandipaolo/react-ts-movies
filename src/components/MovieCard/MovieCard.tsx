import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useQuery } from '@apollo/client'
import { GetMovieByIdDocument, GetMovieByIdQuery, GetMovieByIdQueryVariables, Movie } from '@/graphql/queries';

import { FavoriteStar } from '@/components/FavoriteStar';
import { AppContext } from '@/context/AppContext';

type MovieCardProps = {
  movieId: number;
  detailed?: boolean;
};

const MovieCard = ({ movieId, detailed = true }: MovieCardProps) => {
  const { loading, error, data } = useQuery<GetMovieByIdQuery, GetMovieByIdQueryVariables>(GetMovieByIdDocument, {
    variables: { movieId }
  });
  const { dispatch } = useContext(AppContext);

  const movieDetail = data?.movieDetail;
  const movie: Partial<Movie> | undefined | null = movieDetail;
  const navigate = useNavigate();

  useEffect(() => {
    if (movie?.id && movie?.genres && movie?.title) {
      const payload = { id: movie.id, genres: movie.genres?.map((genre) => genre ? genre.name : ''), name: movie.title };
      dispatch({ type:"ADD_DETAILED_MOVIE", payload});
    }
  }, [data, dispatch, movie]);

  const handleSelectedMovie = (event: React.MouseEvent) => {
    event.preventDefault();
    if (movie?.id) {
      dispatch({ type: 'SET_SELECTED_MOVIE', payload: { value: movie.id }})
      navigate('/movieDetails')
    }
  }
  if (error) {
    return <p>Error! {error.message}</p>
  }
  
  return (
    <div className='duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-55'>
      {loading ? (
        <div className="relative group w-[12em] h-[18em] overflow-hidden bg-black rounded-md flex-none animate-pulse">
          <div className="absolute inset-0 bg-gray-400 rounded-md flex items-center justify-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status"></div>
          </div>
        </div>
      ) : (
      detailed 
      ? <div className="relative group w-[12em] h-[18em] overflow-hidden bg-black rounded-md flex-none">
          <img className='object-cover w-full h-full transform duration-700 backdrop-opacity-200' src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie?.poster_path}` || ''} alt='Movie poster.'/>
          <div className="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
          <div className="absolute bg-gradient-to-t  from-blue-800 w-full via-black h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
            <div className="absolute w-full h-[4rem] flex flex-col gap-1 place-content-center">
              <p className="capitalize font-bold text-xs text-center shadow-2xl text-white mb-2">{movie?.title}</p>
              {
                movie?.genres && movie?.genres.length > 0
                ? <ul className='flex absolute bottom-0 w-full flex-row gap-2 justify-center align-middle'>
                    {
                      movie.genres.slice(0, 3).map((genre) => (
                        <li className='flex h-auto w-auto bg-gray-900 bg-opacity-60 rounded-sm justify-center align-middle' key={genre && genre.id}><span className='m-auto p-1 font-semibold text-white text-[.5rem]'>{genre && genre.name === 'Science Fiction' ? 'S. Fiction' : genre?.name}</span></li>
                      ))
                    }
                  </ul>
                : <></>
              }
            </div>
              <>
                <div className="absolute w-full flex place-content-center mt-[5rem]">
                  <p className="text-xs font-sans w-full p-2 text-white">{movie?.overview?.substring(0,120)}{movie?.overview && movie?.overview.length > 120 ? '...' : ''}</p>
                </div>
                <div className='absolute right-5 bottom-12'>
                  <FavoriteStar movieId={movieId}/>
                </div>
                <button onClick={handleSelectedMovie} tabIndex={-1} className="absolute left-[12%] bottom-5 bg-gray-100 bg-opacity-10 text-white font-semibold rounded h-[1.5rem] w-[9rem] hover:bg-gray-400 hover:bg-opacity-10 text-sm">
                    Show more
                </button>
              </>
          </div>
        </div>
        : <div className='flex flex-col items-center align-middle justify-center cursor-pointer' onClick={handleSelectedMovie}>
            <div className='flex flex-row justify-betweens items-center align-middle gap-2 text-center'>
              <p className="capitalize font-bold text-md text-center lg:pt-1 shadow-2xl text-white m-1 mb-2">{movie?.title}</p>
              <FavoriteStar movieId={movieId} />
            </div>
            <div className="relative w-[12em] h-[18em] overflow-hidden bg-black rounded-md flex-none">
              <img className='object-cover w-full h-full transform duration-700 backdrop-opacity-200' src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie?.poster_path}` || ''} alt='Movie poster.'/>
            </div>  
        </div>
      )}
    </div>
  );
};

export { MovieCard };