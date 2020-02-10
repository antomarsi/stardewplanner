import { EditorTypes, InitialState } from "./types";

const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case EditorTypes.TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebarOpen: !state.sidebarOpen
      };
    case EditorTypes.SELECT_ITEM:
      return {
        ...state,
        selected: action.payload
      }
    default:
      return state;
  }
};

export default reducer;
