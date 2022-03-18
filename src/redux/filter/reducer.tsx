import { types } from './types';


export const filterReducer = (state = "", action: any) => {
    switch (action.type) {
        case types.changeInput:
            return action.payload;
        default:
            return state;
    }
}