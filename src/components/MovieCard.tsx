import { useQuery } from '@apollo/client'
import { GetMovieByIdDocument } from '@/graphql/queries';

type MovieCardProps = {
  movieId: number;
  // onAddToFavorites: (movie: Movie) => void;
};

const MovieCard = ({ movieId }: MovieCardProps) => {
  const { loading, error, data } = useQuery(GetMovieByIdDocument, {
    variables: { movieId: movieId }
  });
  // const handleAddToFavorites = () => {
  //   onAddToFavorites(movie);
  // };

  return (
    // <div className="bg-white shadow-md rounded-lg overflow-hidden">
    //   <img className="w-full h-48 object-cover" src={movie.poster_path || ''} alt='Movie poster.' />
    //   <div className="p-4">
    //     <h2 className="text-lg font-bold mb-2">{movie.original_title}</h2>
    //     <p className="text-gray-700 text-base">{movie.overview}</p>
    //     <div className="mt-4 flex justify-between items-center">
    //       <button onClick={handleAddToFavorites} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      //         Add to favorites
    //       </button>
    //       {/* <span className="text-gray-700 font-bold text-xl">${movie.}</span> */}
    //     </div>
    //   </div>
    // </div>
    <>
      <div><p>{loading ? 'Loading...' : data?.movieDetail.ok.toString()}</p></div>
    </>
  );
};

export default MovieCard;