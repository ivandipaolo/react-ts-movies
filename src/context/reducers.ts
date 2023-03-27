interface AvailableMoviesState {
  value: number[];
}

interface DetailedMoviesState {
  value: {
    id: number;
    name: string;
    genres: string[];
  }[];
}

interface FavoriteMoviesState {
  value: {
    id: number;
  }[];
}

interface SearchMoviesState {
  value: {
    movies: number[];
    noResults: boolean;
  };
}

interface SelectedMovieState {
  value: number;
}

interface SearchMoviesState {
  value: {
    movies: number[];
    noResults: boolean;
  }
}

type AvailableMoviesAction = {
  type: 'SET_AVAILABLE_MOVIES';
  payload: number[];
};

type SelectedMovieAction = {
  type: 'SET_SELECTED_MOVIE';
  payload: {
    value: number;
  };
};

type DetailedMoviesAction = {
  type: 'ADD_DETAILED_MOVIE';
  payload: {
    id: number;
    name: string;
    genres: string[];
  };
};

type FavoriteMoviesAction = {
  type: 'TOGGLE_FAVORITE_MOVIE';
  payload: {
    id: number;
  };
};

type SearchMoviesAction = {
  type: 'SET_SEARCHED_MOVIES';
  payload: {
    movies: number[];
    noResults: boolean;
  };
};

export const availableMoviesReducer = (
  state: AvailableMoviesState,
  action: AvailableMoviesAction
): AvailableMoviesState => {
  switch (action.type) {
    case 'SET_AVAILABLE_MOVIES':
      return {
        value: [...new Set([...state.value, ...action.payload])],
      };
    default:
      return state;
  }
};

export const selectedMovieReducer = (
  state: SelectedMovieState,
  action: SelectedMovieAction
): SelectedMovieState => {
  switch (action.type) {
    case 'SET_SELECTED_MOVIE':
      return {
        value: action.payload.value,
      };
    default:
      return state;
  }
};

export const detailedMoviesReducer = (
  state: DetailedMoviesState,
  action: DetailedMoviesAction
): DetailedMoviesState => {
  switch (action.type) {
    case 'ADD_DETAILED_MOVIE': {
      const { id, name, genres } = action.payload;
      const alreadyExists = state.value.some((item) => item.id === id);
      if (alreadyExists) return state;
      return {
        value: [...state.value, { id, name, genres }],
      };
    }
    default:
      return state;
  }
};

export const favoriteMoviesReducer = (
  state: FavoriteMoviesState,
  action: FavoriteMoviesAction
): FavoriteMoviesState => {
  switch (action.type) {
    case 'TOGGLE_FAVORITE_MOVIE': {
      const { id } = action.payload;
      const alreadyExists = state.value.some((item) => item.id === id);
      let updatedState;
      if (alreadyExists) {
        updatedState = {
          value: state.value.filter((item) => item.id !== id),
        };
      } else {
        updatedState = {
          value: [...state.value, { id }],
        };
      }
      sessionStorage.setItem('favoriteMovies', JSON.stringify(updatedState.value));
      return updatedState;
    }
    default:
      return state;
  }
};

export const searchedMoviesReducer = (
  state: SearchMoviesState,
  action: SearchMoviesAction
): SearchMoviesState => {
  switch (action.type) {
    case 'SET_SEARCHED_MOVIES':
      return {
        value:{
          movies: action.payload.movies,
          noResults: action.payload.noResults,
        }
      };
    default:
      return state;
  }
};