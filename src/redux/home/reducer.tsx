import { types } from './types';

interface  IHomeState {
    cards: Array<{
        id: number,
        archetype: string,
        card_images: [],
        card_prices: [],
        card_sets: [],
        desc: string,
        name: string,
        race: string,
        type: string,
        favorite: boolean
    }>
  }

const initialState: IHomeState = {
    cards: []
}

export const homeReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case types.getCards:
            return {
                ...state,
                cards: action.payload
            };
        default:
            return state;
    }
}