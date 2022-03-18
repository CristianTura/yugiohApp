import { combineReducers } from "redux";
import { homeReducer } from "./home/reducer";
import { favoritesReducer } from './favorites/reducer';
import { filterReducer } from './filter/reducer';


export const rootReducer = combineReducers({
    cards: homeReducer,
    favorites: favoritesReducer,
    filter: filterReducer
})