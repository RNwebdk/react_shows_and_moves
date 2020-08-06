import { SEARCH_SHOW } from "../constants/action-types";

// const initialState = { searchShow: [] };
const initialState = [];

export default function addSearchResultReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_SHOW:
      const newState = [];
      return [...action.payload];

    default:
      return state;
  }
}
