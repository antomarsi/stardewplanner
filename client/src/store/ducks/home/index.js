import { HomeRenders, InitialState } from "./types";

const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case HomeRenders.FETCH_REQUEST:
      return { ...state, loading: true, error: false };
    case HomeRenders.FETCH_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false
      };
    case HomeRenders.FETCH_ERROR:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

export default reducer;
