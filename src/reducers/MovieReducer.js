const initialState = {
  movies: [],
};

const movieReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CARD":
      return {
        movies: [...state.movies, action.payload],
      };
      break;
    case "REMOVE_TA_CARD":
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== action.payload.id),
      };
      break;
    default:
      return state;
  }
};

export { initialState, movieReducer };
