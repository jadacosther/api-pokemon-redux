import { applyMiddleware,  legacy_createStore } from "redux";
import buscadorPokemonReducer from "./reducers/reducer";
import {composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";

const store = legacy_createStore(
  buscadorPokemonReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
