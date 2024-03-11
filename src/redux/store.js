import { createStore } from "redux";
import { moviesRed } from "./reducer";

 export const store = createStore(
   moviesRed, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );