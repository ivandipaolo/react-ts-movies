import React, { createContext, useReducer } from 'react';
import { availableMoviesReducer, detailedMoviesReducer, favoriteMoviesReducer, searchedMoviesReducer, selectedMovieReducer } from './reducers';

type InitialStateType = {
  selectedMovie: { value: number },
  availableMovies: { value: number[] },
  favoriteMovies: { value: {id: number}[] },
  searchedMovies: {
    value: {
      movies:number[],
      noResults: boolean
    }
  },
  detailedMovies: {
      value: {
      id: number,
      name: string,
      genres: string[]
    }[]
  }
}


const initialState: InitialStateType = {
  selectedMovie:{ value: 0 },
  detailedMovies:{ value: [] },
  availableMovies:{ value: [] },
  favoriteMovies:{ value: [] },
  searchedMovies:{ value: {
      movies: [],
      noResults: false
    }
  }
};

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null
});

const mainReducer = ({ selectedMovie, detailedMovies, availableMovies, favoriteMovies, searchedMovies }: any, action: any) => ({
  selectedMovie: selectedMovieReducer(selectedMovie, action),
  detailedMovies: detailedMoviesReducer(detailedMovies, action),
  availableMovies: availableMoviesReducer(availableMovies, action),
  favoriteMovies: favoriteMoviesReducer(favoriteMovies, action),
  searchedMovies: searchedMoviesReducer(searchedMovies, action)
});

type AppProviderProps = {
  children: React.ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider };