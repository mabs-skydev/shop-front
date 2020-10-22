import entitiesReducer from "./entitiesReducer";
import filtersReducer from "./filtersReducer";
import cartReducer from "./cartReducer";
import { combineReducers } from "redux";

export default combineReducers({
  entities: entitiesReducer,
  cart: cartReducer,
  filters: filtersReducer,
});
