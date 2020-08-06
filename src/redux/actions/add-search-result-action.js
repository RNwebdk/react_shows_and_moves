import { SEARCH_SHOW } from "../constants/action-types";

export function addSearchResult(payload) {
  return {
    type: SEARCH_SHOW,
    payload,
  };
}
