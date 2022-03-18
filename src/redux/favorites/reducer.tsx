import { types } from './types';

const initialState:Object[] = [

]

export const favoritesReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case types.addFavorite:
            return action.payload;

        case types.deleteFavorite:
            return action.payload;
    
        default:
            return state;
    }
}