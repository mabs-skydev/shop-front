import { combineReducers } from "redux";
import marquesReducer from "../entities/marques";
import categoriesReducer from "../entities/categories";
import productsReducer from "../entities/products";

export default combineReducers({
  marques: marquesReducer,
  categories: categoriesReducer,
  products: productsReducer,
});
