import { useQuery } from '@apollo/client'
import { Genre, GetMovieByIdDocument, GetMovieByIdQuery, GetMovieByIdQueryVariables, Movie } from '@/graphql/queries';
import { useEffect } from 'react';
import { useAppDispatch } from '@/redux/hooks'
import { addGenres } from '@/redux/slices/genresSlice';

type MovieCardProps = {
  movieId: number;
};

const MovieCard = ({ movieId }: MovieCardProps) => {
  const { loading, error, data } = useQuery<GetMovieByIdQuery, GetMovieByIdQueryVariables>(GetMovieByIdDocument, {
    variables: { movieId }
  });

  const movieDetail = data?.movieDetail;
  const movie: Partial<Movie> | undefined | null = movieDetail?.movie;
  const dispatch = useAppDispatch()

  
  useEffect(() => {
    if (movie?.id && movie?.genres) {
      const payload = { id: movie.id, genres: movie.genres?.map((genre) => genre.name) };
      dispatch(addGenres(payload));
    }
  }, [data, dispatch, movie]);
    
  const handleAddToFavorites = () => {
    return; // Todo
  };

  if (error) {
    return <p>Error! {error.message}</p>
  }
  
  return (
    <>
      {
        //Todo: movie undefined template
        //Todo: add loading tempalte
      }
      {loading ? (
        <p>loading...</p>
      ) : (
        <div className="relative group w-[12em] h-[18em] overflow-hidden bg-black rounded-md flex-none ">
          <img className="object-cover w-full h-full transform duration-700 backdrop-opacity-200 " src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie?.poster_path}` || ''} alt='Movie poster.'/>
          <div className="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
          <div className="absolute bg-gradient-to-t  from-purple-800 w-full via-black h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
            <div className="absolute w-full h-[4rem] flex flex-col gap-1 place-content-center">
              <p className="capitalize font-bold text-xs text-center shadow-2xl text-white mb-2">{movie?.original_title}</p>
              {
                movie?.genres && movie?.genres.length > 0
                ? <ul className='flex absolute bottom-0 w-full flex-row gap-2 justify-center align-middle'>
                    {
                      movie.genres.slice(0, 3).map((genre) => (
                        <li className='flex h-auto w-auto bg-gray-500 bg-opacity-60 rounded-sm justify-center align-middle' key={genre.id}><span className='m-auto p-1 font-semibold text-white text-[.5rem]'>{genre.name === 'Science Fiction' ? 'S. Fiction' : genre.name}</span></li>
                      ))
                    }
                  </ul>
                : <></>
              }
            </div>
            <div className="absolute w-full flex place-content-center mt-[5rem]">
              <p className="text-xs font-sans w-full p-2 text-white">{movie?.overview?.substring(0,215)}{movie?.overview && movie?.overview.length > 215 ? '...' : ''}</p>
            </div>
            <button onClick={handleAddToFavorites} className="absolute left-[12%] bottom-5 bg-gray-100 bg-opacity-10 text-white font-semibold rounded h-[1.5rem] w-[9rem] hover:bg-gray-400 hover:bg-opacity-10 text-sm">
                Show more
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export { MovieCard };