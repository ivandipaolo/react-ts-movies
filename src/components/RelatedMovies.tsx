import { useState, useEffect, useContext } from 'react';

import { useQuery } from '@apollo/client';
import { 
    GetSimilarMoviesDocument,
    GetSimilarMoviesQuery,
    GetSimilarMoviesQueryVariables
  } from '@/graphql/queries';

import { HorizontalLayout } from '@/components/HorizontalLayout';
import { AppContext } from '@/context/AppContext';

type RelatedMoviesProps = {
  movieId?: number
  title?: string
}

export function RelatedMovies({movieId, title = ""}: RelatedMoviesProps): JSX.Element {
  const [listOfIds, setListOfIds] = useState<number[]>([])
  const { state } = useContext(AppContext);
  const { selectedMovie } = state;
  const { loading, error, data } = useQuery<GetSimilarMoviesQuery, GetSimilarMoviesQueryVariables>(GetSimilarMoviesDocument, {
    variables: { movieId: movieId || selectedMovie.value || 0 }
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
      <HorizontalLayout title={title ? title : 'Related Movies'} listedIds={listOfIds} />
    </div>
  );
}
