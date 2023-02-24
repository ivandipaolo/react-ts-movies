import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type CastDetail = {
  __typename?: 'CastDetail';
  character?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  poster_path?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type Company = {
  __typename?: 'Company';
  id: Scalars['Int'];
  logo_path?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  origin_country?: Maybe<Scalars['String']>;
};

export type Configurations = {
  __typename?: 'Configurations';
  change_keys?: Maybe<Array<Maybe<Scalars['String']>>>;
  images?: Maybe<ImageConfigurations>;
};

export type CreditCast = {
  __typename?: 'CreditCast';
  character?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  profile_path?: Maybe<Scalars['String']>;
};

export type CreditCrew = {
  __typename?: 'CreditCrew';
  department?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  profile_path?: Maybe<Scalars['String']>;
};

export type Credits = {
  __typename?: 'Credits';
  cast?: Maybe<Array<Maybe<CreditCast>>>;
  crew?: Maybe<Array<Maybe<CreditCrew>>>;
};

export type CrewDetail = {
  __typename?: 'CrewDetail';
  department?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  job?: Maybe<Scalars['String']>;
  original_name?: Maybe<Scalars['String']>;
  original_title?: Maybe<Scalars['String']>;
  poster_path?: Maybe<Scalars['String']>;
};

export type Episode = {
  __typename?: 'Episode';
  air_date?: Maybe<Scalars['String']>;
  episode_number?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  overview?: Maybe<Scalars['String']>;
  season_number?: Maybe<Scalars['Int']>;
  show_id: Scalars['Int'];
  vote_average: Scalars['Float'];
};

export type Genres = {
  __typename?: 'Genres';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type ImageConfigurations = {
  __typename?: 'ImageConfigurations';
  backdrop_sizes?: Maybe<Array<Maybe<Scalars['String']>>>;
  base_url: Scalars['String'];
  logo_sizes?: Maybe<Array<Maybe<Scalars['String']>>>;
  poster_sizes?: Maybe<Array<Maybe<Scalars['String']>>>;
  profile_sizes?: Maybe<Array<Maybe<Scalars['String']>>>;
  secure_base_url: Scalars['String'];
  still_sizes?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Movie = {
  __typename?: 'Movie';
  backdrop_path?: Maybe<Scalars['String']>;
  credits?: Maybe<Credits>;
  genres?: Maybe<Array<Maybe<Genres>>>;
  id: Scalars['Int'];
  imdb_id?: Maybe<Scalars['String']>;
  overview?: Maybe<Scalars['String']>;
  poster_path?: Maybe<Scalars['String']>;
  production_companies?: Maybe<Array<Maybe<Company>>>;
  release_date?: Maybe<Scalars['String']>;
  runtime?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
  videos?: Maybe<VideoResults>;
  vote_average: Scalars['Float'];
};

export type Person = {
  __typename?: 'Person';
  also_known_as?: Maybe<Array<Maybe<Scalars['String']>>>;
  biography?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['String']>;
  deathday?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  imdb_id?: Maybe<Scalars['String']>;
  movie_credits?: Maybe<PersonCredits>;
  name: Scalars['String'];
  profile_path?: Maybe<Scalars['String']>;
  tv_credits?: Maybe<PersonCredits>;
};

export type PersonCredits = {
  __typename?: 'PersonCredits';
  cast?: Maybe<Array<Maybe<CastDetail>>>;
  crew?: Maybe<Array<Maybe<CrewDetail>>>;
};

export type Query = {
  __typename?: 'Query';
  airingTodayShows: Array<Maybe<Show>>;
  configurations?: Maybe<Configurations>;
  episodeDetail?: Maybe<Episode>;
  movieDetail?: Maybe<Movie>;
  nowPlayingMovies: Array<Maybe<Movie>>;
  personDetail?: Maybe<Person>;
  popularMovies: Array<Maybe<Movie>>;
  popularShows: Array<Maybe<Show>>;
  searchMovie?: Maybe<Array<Maybe<Movie>>>;
  searchPerson?: Maybe<Array<Maybe<Person>>>;
  searchShow?: Maybe<Array<Maybe<Show>>>;
  seasonDetail?: Maybe<Season>;
  showDetail?: Maybe<Show>;
  similarMovies?: Maybe<Array<Maybe<Movie>>>;
  similarShows?: Maybe<Array<Maybe<Show>>>;
  topRatedShows: Array<Maybe<Show>>;
  upcomingMovies: Array<Maybe<Movie>>;
};


export type QueryEpisodeDetailArgs = {
  episodeNumber: Scalars['Int'];
  seasonNumber: Scalars['Int'];
  showId: Scalars['Int'];
};


export type QueryMovieDetailArgs = {
  id: Scalars['Int'];
};


export type QueryPersonDetailArgs = {
  id: Scalars['Int'];
};


export type QuerySearchMovieArgs = {
  term: Scalars['String'];
};


export type QuerySearchPersonArgs = {
  term: Scalars['String'];
};


export type QuerySearchShowArgs = {
  term: Scalars['String'];
};


export type QuerySeasonDetailArgs = {
  seasonNumber: Scalars['Int'];
  showId: Scalars['Int'];
};


export type QueryShowDetailArgs = {
  id: Scalars['Int'];
};


export type QuerySimilarMoviesArgs = {
  id: Scalars['Int'];
};


export type QuerySimilarShowsArgs = {
  id: Scalars['Int'];
};

export type Season = {
  __typename?: 'Season';
  air_date?: Maybe<Scalars['String']>;
  episodes?: Maybe<Array<Maybe<Episode>>>;
  id: Scalars['Int'];
  name: Scalars['String'];
  overview?: Maybe<Scalars['String']>;
  poster_path?: Maybe<Scalars['String']>;
  season_number?: Maybe<Scalars['Int']>;
};

export type Show = {
  __typename?: 'Show';
  backdrop_path?: Maybe<Scalars['String']>;
  credits?: Maybe<Credits>;
  first_air_date?: Maybe<Scalars['String']>;
  genres?: Maybe<Array<Maybe<Genres>>>;
  homepage?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  last_air_date?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  number_of_episodes?: Maybe<Scalars['Int']>;
  number_of_seasons?: Maybe<Scalars['Int']>;
  overview?: Maybe<Scalars['String']>;
  poster_path?: Maybe<Scalars['String']>;
  seasons?: Maybe<Array<Maybe<Season>>>;
  videos?: Maybe<VideoResults>;
  vote_average: Scalars['Float'];
};

export type Video = {
  __typename?: 'Video';
  id: Scalars['String'];
  iso: Scalars['String'];
  key: Scalars['String'];
  name: Scalars['String'];
  site: Scalars['String'];
  type: Scalars['String'];
};

export type VideoResults = {
  __typename?: 'VideoResults';
  results?: Maybe<Array<Maybe<Video>>>;
};

export type GetMovieByIdQueryVariables = Exact<{
  movieId: Scalars['Int'];
}>;


export type GetMovieByIdQuery = { __typename?: 'Query', movieDetail?: { __typename?: 'Movie', id: number, title: string, overview?: string | null, poster_path?: string | null, vote_average: number, genres?: Array<{ __typename?: 'Genres', id: number, name: string } | null> | null } | null };

export type GetAvailableMoviesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAvailableMoviesQuery = { __typename?: 'Query', nowPlayingMovies: Array<{ __typename?: 'Movie', id: number, release_date?: string | null } | null>, popularMovies: Array<{ __typename?: 'Movie', id: number, release_date?: string | null } | null> };

export type GetMovieDetailsQueryVariables = Exact<{
  movieId: Scalars['Int'];
}>;


export type GetMovieDetailsQuery = { __typename?: 'Query', movieDetail?: { __typename?: 'Movie', backdrop_path?: string | null, title: string, overview?: string | null, poster_path?: string | null, release_date?: string | null, genres?: Array<{ __typename?: 'Genres', id: number, name: string } | null> | null, production_companies?: Array<{ __typename?: 'Company', id: number, name: string } | null> | null } | null };

export type GetSimilarMoviesQueryVariables = Exact<{
  movieId: Scalars['Int'];
}>;


export type GetSimilarMoviesQuery = { __typename?: 'Query', similarMovies?: Array<{ __typename?: 'Movie', id: number } | null> | null };

export type GetPopularMoviesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPopularMoviesQuery = { __typename?: 'Query', popularMovies: Array<{ __typename?: 'Movie', id: number } | null> };


export const GetMovieByIdDocument = gql`
    query getMovieById($movieId: Int!) {
  movieDetail(id: $movieId) {
    id
    title
    overview
    poster_path
    vote_average
    genres {
      id
      name
    }
  }
}
    `;

/**
 * __useGetMovieByIdQuery__
 *
 * To run a query within a React component, call `useGetMovieByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMovieByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMovieByIdQuery({
 *   variables: {
 *      movieId: // value for 'movieId'
 *   },
 * });
 */
export function useGetMovieByIdQuery(baseOptions: Apollo.QueryHookOptions<GetMovieByIdQuery, GetMovieByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMovieByIdQuery, GetMovieByIdQueryVariables>(GetMovieByIdDocument, options);
      }
export function useGetMovieByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMovieByIdQuery, GetMovieByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMovieByIdQuery, GetMovieByIdQueryVariables>(GetMovieByIdDocument, options);
        }
export type GetMovieByIdQueryHookResult = ReturnType<typeof useGetMovieByIdQuery>;
export type GetMovieByIdLazyQueryHookResult = ReturnType<typeof useGetMovieByIdLazyQuery>;
export type GetMovieByIdQueryResult = Apollo.QueryResult<GetMovieByIdQuery, GetMovieByIdQueryVariables>;
export const GetAvailableMoviesDocument = gql`
    query getAvailableMovies {
  nowPlayingMovies {
    id
    release_date
  }
  popularMovies {
    id
    release_date
  }
}
    `;

/**
 * __useGetAvailableMoviesQuery__
 *
 * To run a query within a React component, call `useGetAvailableMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAvailableMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAvailableMoviesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAvailableMoviesQuery(baseOptions?: Apollo.QueryHookOptions<GetAvailableMoviesQuery, GetAvailableMoviesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAvailableMoviesQuery, GetAvailableMoviesQueryVariables>(GetAvailableMoviesDocument, options);
      }
export function useGetAvailableMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAvailableMoviesQuery, GetAvailableMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAvailableMoviesQuery, GetAvailableMoviesQueryVariables>(GetAvailableMoviesDocument, options);
        }
export type GetAvailableMoviesQueryHookResult = ReturnType<typeof useGetAvailableMoviesQuery>;
export type GetAvailableMoviesLazyQueryHookResult = ReturnType<typeof useGetAvailableMoviesLazyQuery>;
export type GetAvailableMoviesQueryResult = Apollo.QueryResult<GetAvailableMoviesQuery, GetAvailableMoviesQueryVariables>;
export const GetMovieDetailsDocument = gql`
    query GetMovieDetails($movieId: Int!) {
  movieDetail(id: $movieId) {
    backdrop_path
    title
    overview
    poster_path
    release_date
    genres {
      id
      name
    }
    production_companies {
      id
      name
    }
  }
}
    `;

/**
 * __useGetMovieDetailsQuery__
 *
 * To run a query within a React component, call `useGetMovieDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMovieDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMovieDetailsQuery({
 *   variables: {
 *      movieId: // value for 'movieId'
 *   },
 * });
 */
export function useGetMovieDetailsQuery(baseOptions: Apollo.QueryHookOptions<GetMovieDetailsQuery, GetMovieDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMovieDetailsQuery, GetMovieDetailsQueryVariables>(GetMovieDetailsDocument, options);
      }
export function useGetMovieDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMovieDetailsQuery, GetMovieDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMovieDetailsQuery, GetMovieDetailsQueryVariables>(GetMovieDetailsDocument, options);
        }
export type GetMovieDetailsQueryHookResult = ReturnType<typeof useGetMovieDetailsQuery>;
export type GetMovieDetailsLazyQueryHookResult = ReturnType<typeof useGetMovieDetailsLazyQuery>;
export type GetMovieDetailsQueryResult = Apollo.QueryResult<GetMovieDetailsQuery, GetMovieDetailsQueryVariables>;
export const GetSimilarMoviesDocument = gql`
    query getSimilarMovies($movieId: Int!) {
  similarMovies(id: $movieId) {
    id
  }
}
    `;

/**
 * __useGetSimilarMoviesQuery__
 *
 * To run a query within a React component, call `useGetSimilarMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSimilarMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSimilarMoviesQuery({
 *   variables: {
 *      movieId: // value for 'movieId'
 *   },
 * });
 */
export function useGetSimilarMoviesQuery(baseOptions: Apollo.QueryHookOptions<GetSimilarMoviesQuery, GetSimilarMoviesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSimilarMoviesQuery, GetSimilarMoviesQueryVariables>(GetSimilarMoviesDocument, options);
      }
export function useGetSimilarMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSimilarMoviesQuery, GetSimilarMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSimilarMoviesQuery, GetSimilarMoviesQueryVariables>(GetSimilarMoviesDocument, options);
        }
export type GetSimilarMoviesQueryHookResult = ReturnType<typeof useGetSimilarMoviesQuery>;
export type GetSimilarMoviesLazyQueryHookResult = ReturnType<typeof useGetSimilarMoviesLazyQuery>;
export type GetSimilarMoviesQueryResult = Apollo.QueryResult<GetSimilarMoviesQuery, GetSimilarMoviesQueryVariables>;
export const GetPopularMoviesDocument = gql`
    query getPopularMovies {
  popularMovies {
    id
  }
}
    `;

/**
 * __useGetPopularMoviesQuery__
 *
 * To run a query within a React component, call `useGetPopularMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPopularMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPopularMoviesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPopularMoviesQuery(baseOptions?: Apollo.QueryHookOptions<GetPopularMoviesQuery, GetPopularMoviesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPopularMoviesQuery, GetPopularMoviesQueryVariables>(GetPopularMoviesDocument, options);
      }
export function useGetPopularMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPopularMoviesQuery, GetPopularMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPopularMoviesQuery, GetPopularMoviesQueryVariables>(GetPopularMoviesDocument, options);
        }
export type GetPopularMoviesQueryHookResult = ReturnType<typeof useGetPopularMoviesQuery>;
export type GetPopularMoviesLazyQueryHookResult = ReturnType<typeof useGetPopularMoviesLazyQuery>;
export type GetPopularMoviesQueryResult = Apollo.QueryResult<GetPopularMoviesQuery, GetPopularMoviesQueryVariables>;