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
};

export type Cast = {
  __typename?: 'Cast';
  adult?: Maybe<Scalars['Boolean']>;
  backdrop_path?: Maybe<Scalars['String']>;
  character?: Maybe<Scalars['String']>;
  credit_id?: Maybe<Scalars['String']>;
  genre_ids: Array<Scalars['Int']>;
  id: Scalars['Int'];
  original_language?: Maybe<Scalars['String']>;
  original_title?: Maybe<Scalars['String']>;
  overview?: Maybe<Scalars['String']>;
  popularity?: Maybe<Scalars['Int']>;
  poster_path?: Maybe<Scalars['String']>;
  release_date?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  video?: Maybe<Scalars['Boolean']>;
  vote_average?: Maybe<Scalars['Int']>;
  vote_count?: Maybe<Scalars['Int']>;
};

export type Company = {
  __typename?: 'Company';
  id: Scalars['Int'];
  logo_path?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  origin_country?: Maybe<Scalars['String']>;
};

export type Country = {
  __typename?: 'Country';
  iso_3166_1: Scalars['String'];
  name: Scalars['String'];
};

export type Creator = {
  __typename?: 'Creator';
  credir_id?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  profile_path?: Maybe<Scalars['String']>;
};

export type Credits = {
  __typename?: 'Credits';
  cast: Array<Cast>;
  crew: Array<Crew>;
  id: Scalars['Int'];
};

export type Crew = {
  __typename?: 'Crew';
  adult?: Maybe<Scalars['Boolean']>;
  backdrop_path?: Maybe<Scalars['String']>;
  credit_id?: Maybe<Scalars['String']>;
  department?: Maybe<Scalars['String']>;
  genre_ids: Array<Scalars['Int']>;
  id: Scalars['Int'];
  job?: Maybe<Scalars['String']>;
  original_language?: Maybe<Scalars['String']>;
  original_title?: Maybe<Scalars['String']>;
  overview?: Maybe<Scalars['String']>;
  popularity?: Maybe<Scalars['Int']>;
  poster_path?: Maybe<Scalars['String']>;
  release_date?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  video?: Maybe<Scalars['Boolean']>;
  vote_average?: Maybe<Scalars['Int']>;
  vote_count?: Maybe<Scalars['Int']>;
};

export type Episode = {
  __typename?: 'Episode';
  air_date?: Maybe<Scalars['String']>;
  crew: Array<Crew>;
  episode_number?: Maybe<Scalars['Int']>;
  guest_stars: Array<GuestStar>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  overview?: Maybe<Scalars['String']>;
  production_code?: Maybe<Scalars['String']>;
  season_number?: Maybe<Scalars['Int']>;
  still_path?: Maybe<Scalars['String']>;
  vote_average?: Maybe<Scalars['Int']>;
  vote_count?: Maybe<Scalars['Int']>;
};

export type EpisodeOutput = {
  __typename?: 'EpisodeOutput';
  episode?: Maybe<Episode>;
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type Genre = {
  __typename?: 'Genre';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type GuestStar = {
  __typename?: 'GuestStar';
  character?: Maybe<Scalars['String']>;
  credit_id?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  profile_path?: Maybe<Scalars['String']>;
};

export type Language = {
  __typename?: 'Language';
  iso_639_1: Scalars['String'];
  name: Scalars['String'];
};

export type LastEpisode = {
  __typename?: 'LastEpisode';
  air_date?: Maybe<Scalars['String']>;
  episode_number?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  overview?: Maybe<Scalars['String']>;
  production_code?: Maybe<Scalars['String']>;
  season_number?: Maybe<Scalars['Int']>;
  still_path?: Maybe<Scalars['String']>;
  vote_average?: Maybe<Scalars['Int']>;
  vote_count?: Maybe<Scalars['Int']>;
};

export type Movie = {
  __typename?: 'Movie';
  adult?: Maybe<Scalars['Boolean']>;
  backdrop_path?: Maybe<Scalars['String']>;
  budget?: Maybe<Scalars['Int']>;
  credits: Credits;
  genres: Array<Genre>;
  homepage?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  imdb_id?: Maybe<Scalars['String']>;
  original_language?: Maybe<Scalars['String']>;
  original_title?: Maybe<Scalars['String']>;
  overview?: Maybe<Scalars['String']>;
  popularity?: Maybe<Scalars['Int']>;
  poster_path?: Maybe<Scalars['String']>;
  production_companies: Array<Company>;
  production_countries: Array<Country>;
  release_date?: Maybe<Scalars['String']>;
  revenue?: Maybe<Scalars['Int']>;
  runtime?: Maybe<Scalars['Int']>;
  spoken_languages: Array<Language>;
  status?: Maybe<Scalars['String']>;
  tagline?: Maybe<Scalars['String']>;
  videos: VideoResults;
  vote_average?: Maybe<Scalars['Float']>;
  vote_count?: Maybe<Scalars['Int']>;
};

export type MovieOutput = {
  __typename?: 'MovieOutput';
  error?: Maybe<Scalars['String']>;
  movie?: Maybe<Movie>;
  ok: Scalars['Boolean'];
};

export type MoviesOutput = {
  __typename?: 'MoviesOutput';
  error?: Maybe<Scalars['String']>;
  movies?: Maybe<Array<Movie>>;
  ok: Scalars['Boolean'];
};

export type Network = {
  __typename?: 'Network';
  headquarters?: Maybe<Scalars['String']>;
  homepage?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  logo_path?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  origin_country?: Maybe<Scalars['String']>;
};

export type PeopleOutput = {
  __typename?: 'PeopleOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  people?: Maybe<Array<Person>>;
};

export type Person = {
  __typename?: 'Person';
  adult?: Maybe<Scalars['Boolean']>;
  also_knwon_as?: Maybe<Scalars['String']>;
  biography?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['String']>;
  deathday?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  homepage?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  imdb_id?: Maybe<Scalars['String']>;
  known_for_department?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  place_of_birth?: Maybe<Scalars['String']>;
  profile_path?: Maybe<Scalars['String']>;
};

export type PersonOutput = {
  __typename?: 'PersonOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  person?: Maybe<Person>;
};

export type Query = {
  __typename?: 'Query';
  airingTodayShows: ShowsOutput;
  episodeDetail: EpisodeOutput;
  movieDetail: MovieOutput;
  nowPlayingMovies: MoviesOutput;
  personDetail: PersonOutput;
  popularMovies: MoviesOutput;
  popularShows: ShowsOutput;
  searchMovie: MoviesOutput;
  searchPeople: PeopleOutput;
  searchShow: ShowsOutput;
  seasonDetail: SeasonOutput;
  showDetail: ShowOutput;
  similarMovies: MoviesOutput;
  similarShows: ShowsOutput;
  topRatedShows: ShowsOutput;
  upcomingMovies: MoviesOutput;
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
  query: Scalars['String'];
};


export type QuerySearchPeopleArgs = {
  query: Scalars['String'];
};


export type QuerySearchShowArgs = {
  query: Scalars['String'];
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
  episodes: Array<Episode>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  overview?: Maybe<Scalars['String']>;
  poster_path?: Maybe<Scalars['String']>;
  season_number?: Maybe<Scalars['Int']>;
};

export type SeasonOutput = {
  __typename?: 'SeasonOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  season?: Maybe<Season>;
};

export type Show = {
  __typename?: 'Show';
  backdrop_path?: Maybe<Scalars['String']>;
  created_by: Array<Creator>;
  episode_run_time: Array<Scalars['Int']>;
  first_air_date?: Maybe<Scalars['String']>;
  genres: Array<Genre>;
  homepage?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  in_production?: Maybe<Scalars['Boolean']>;
  languages: Array<Language>;
  last_air_date?: Maybe<Scalars['String']>;
  last_episode_to_air?: Maybe<LastEpisode>;
  name?: Maybe<Scalars['String']>;
  networks: Array<Network>;
  number_of_episodes?: Maybe<Scalars['Int']>;
  number_of_seasons?: Maybe<Scalars['Int']>;
  origin_country: Array<Scalars['String']>;
  original_language?: Maybe<Scalars['String']>;
  original_name?: Maybe<Scalars['String']>;
  overview?: Maybe<Scalars['String']>;
  popularity?: Maybe<Scalars['Int']>;
  poster_path?: Maybe<Scalars['String']>;
  production_companies: Array<Company>;
  production_countries: Array<Country>;
  seasons: Array<Season>;
  spoken_languages: Array<Language>;
  status?: Maybe<Scalars['String']>;
  tagline?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  vote_average?: Maybe<Scalars['Int']>;
  vote_count?: Maybe<Scalars['Int']>;
};

export type ShowOutput = {
  __typename?: 'ShowOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  show?: Maybe<Show>;
};

export type ShowsOutput = {
  __typename?: 'ShowsOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  shows?: Maybe<Array<Show>>;
};

export type Video = {
  __typename?: 'Video';
  id: Scalars['Int'];
  iso_639_1?: Maybe<Scalars['String']>;
  iso_3166_1?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  site?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

export type VideoResults = {
  __typename?: 'VideoResults';
  results: Array<Video>;
};

export type GetMovieByIdQueryVariables = Exact<{
  movieId: Scalars['Int'];
}>;


export type GetMovieByIdQuery = { __typename?: 'Query', movieDetail: { __typename?: 'MovieOutput', movie?: { __typename?: 'Movie', id: number, original_title?: string | null, overview?: string | null, poster_path?: string | null, genres: Array<{ __typename?: 'Genre', id: number, name: string }> } | null } };

export type GetAvailableMoviesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAvailableMoviesQuery = { __typename?: 'Query', nowPlayingMovies: { __typename?: 'MoviesOutput', movies?: Array<{ __typename?: 'Movie', id: number, release_date?: string | null }> | null }, popularMovies: { __typename?: 'MoviesOutput', movies?: Array<{ __typename?: 'Movie', id: number, release_date?: string | null }> | null } };

export type GetMovieDetailsQueryVariables = Exact<{
  movieId: Scalars['Int'];
}>;


export type GetMovieDetailsQuery = { __typename?: 'Query', movieDetail: { __typename?: 'MovieOutput', movie?: { __typename?: 'Movie', adult?: boolean | null, backdrop_path?: string | null, budget?: number | null, homepage?: string | null, imdb_id?: string | null, original_language?: string | null, original_title?: string | null, overview?: string | null, poster_path?: string | null, release_date?: string | null, revenue?: number | null, runtime?: number | null, status?: string | null, tagline?: string | null, vote_average?: number | null, vote_count?: number | null, genres: Array<{ __typename?: 'Genre', id: number, name: string }>, production_companies: Array<{ __typename?: 'Company', id: number, name: string }> } | null } };

export type GetSimilarMoviesQueryVariables = Exact<{
  movieId: Scalars['Int'];
}>;


export type GetSimilarMoviesQuery = { __typename?: 'Query', similarMovies: { __typename?: 'MoviesOutput', movies?: Array<{ __typename?: 'Movie', id: number }> | null } };

export type GetPopularMoviesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPopularMoviesQuery = { __typename?: 'Query', popularMovies: { __typename?: 'MoviesOutput', movies?: Array<{ __typename?: 'Movie', id: number }> | null } };


export const GetMovieByIdDocument = gql`
    query getMovieById($movieId: Int!) {
  movieDetail(id: $movieId) {
    movie {
      id
      original_title
      overview
      poster_path
      genres {
        id
        name
      }
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
    movies {
      id
      release_date
    }
  }
  popularMovies {
    movies {
      id
      release_date
    }
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
    movie {
      adult
      backdrop_path
      budget
      homepage
      imdb_id
      original_language
      original_title
      overview
      poster_path
      release_date
      revenue
      runtime
      status
      tagline
      vote_average
      vote_count
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
    movies {
      id
    }
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
    movies {
      id
    }
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