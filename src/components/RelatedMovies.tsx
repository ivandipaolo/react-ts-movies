import { useState, useEffect } from 'react';

import { useQuery } from '@apollo/client';
import {
  GetSimilarMoviesDocument,
  GetSimilarMoviesQuery,
  GetSimilarMoviesQueryVariables
} from '@/graphql/queries';

import { HorizontalLayout } from '@/components/HorizontalLayout';

type RelatedMoviesProps = {
  movieId?: number
  title?: string
}

export function RelatedMovies({movieId, title = ""}: RelatedMoviesProps): JSX.Element {
  const [listOfIds, setListOfIds] = useState<number[]>([])

  const { error, data } = useQuery<GetSimilarMoviesQuery, GetSimilarMoviesQueryVariables>(GetSimilarMoviesDocument, {
    variables: { movieId: movieId || 0 }
  });

  useEffect(() => {
    if(data && data.similarMovies) {
      setListOfIds(data.similarMovies.map((movie) => movie ? movie.id  : 0))
    }
  }, [data])

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="">
      <HorizontalLayout title={title ? title : 'Related Movies'} listedIds={listOfIds} />
    </div>
  );
}
