import store from "../redux/store/index";
import { addSearchResult } from "./actions/add-search-result-action";

window.store = store;
window.addSearchResult = addSearchResult;
