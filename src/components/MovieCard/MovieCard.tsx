import { useQuery } from '@apollo/client'
import { GetMovieByIdDocument, GetMovieByIdQuery, GetMovieByIdQueryVariables, Movie } from '@/graphql/queries';

type MovieCardProps = {
  movieId: number;
};

const MovieCard = ({ movieId }: MovieCardProps) => {
  const { loading, error, data } = useQuery<GetMovieByIdQuery, GetMovieByIdQueryVariables>(GetMovieByIdDocument, {
    variables: { movieId }
  });

  const handleAddToFavorites = () => {
    return;
  };

  const movieDetail = data?.movieDetail;
  const movie: Partial<Movie> | undefined | null = movieDetail?.movie;

  return (
    <>
      {
        //Todo: movie undefined template
      }
      {loading ? (
        <p>loading...</p>
      ) : (
        <div className="relative group w-[14em] h-[20em] overflow-hidden bg-black rounded-md">
          <img className="object-cover w-full h-full transform duration-700 backdrop-opacity-100" src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie?.poster_path}` || ''} alt='Movie poster.'/>
          <div className="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
          <div className="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
            <div className="absolute w-full flex flex-col gap-1 place-content-center">
              <p className="capitalize font-bold text-base text-center shadow-2xl text-white mt-5">{movie?.original_title}</p>
              {
                movie?.genres && movie?.genres.length > 0
                ? <ul className='h-6 w-full flex flex-row gap-1 justify-center align-middle'>
                    {movie.genres.slice(0, 3).map((genre) => (
                        <li className='h-full bg-black bg-opacity-60 rounded flex justify-center p-1' key={genre.id}><span className='text-center text-white text-xs '>{genre.name}</span></li>
                      ))}
                    </ul>
                  : <></>
              }
            </div>
            <div className="absolute w-full flex place-content-center mt-20">
              <p className="text-sm font-sans w-full p-2 text-white">{movie?.overview?.substring(0,200)}{movie?.overview && movie?.overview.length > 200 ? '...' : ''}</p>
            </div>
            <button onClick={handleAddToFavorites} className="absolute left-[20%] bottom-5 bg-white text-black font-bold rounded h-7 w-[7rem] hover:bg-gray-200 text-s">
                More details
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export { MovieCard };