import { LoadingTypes, InitialState } from "./types";

const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case LoadingTypes.SET_LOADING:
      return {
        ...state,
        loading: [
          ...state.loading.filter(l => l.id !== action.payload.id),
          action.payload
        ]
      };
    case LoadingTypes.REMOVE_LOADING:
      return {
        ...state,
        loading: state.loading.filter(l => l.id !== action.payload.id)
      };
    default:
      return state;
  }
};

export default reducer;
