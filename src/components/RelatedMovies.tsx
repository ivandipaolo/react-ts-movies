import { HorizontalLayout } from './HorizontalLayout';
import { useState, useEffect } from 'react';
import { useAppSelector } from '@/redux/hooks';
import { useQuery } from '@apollo/client';
import { GetSimilarMoviesDocument, GetSimilarMoviesQuery, GetSimilarMoviesQueryVariables } from '@/graphql/queries';

type RelatedMoviesProps = {
  movieId?: number
}

export function RelatedMovies({movieId}: RelatedMoviesProps): JSX.Element {
  const [listOfIds, setListOfIds] = useState<number[]>([])
  const selectedMovieId = useAppSelector((state) => state.selectedMovie.value)

  const { loading, error, data } = useQuery<GetSimilarMoviesQuery, GetSimilarMoviesQueryVariables>(GetSimilarMoviesDocument, {
    variables: { movieId: movieId || selectedMovieId || 0 }
  });

  useEffect(() => {
    if(data && data.similarMovies && data.similarMovies) {
      setListOfIds(data.similarMovies.map((movie) => movie ? movie.id  : 0))
    }
  }, [data])

  
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="">
      <HorizontalLayout title='Related Movies' listedIds={listOfIds} />
    </div>
  );
}
