import { types } from "./types";

interface IFavoritesState {
  id: number;
  archetype: string;
  card_images: [];
  card_prices: [];
  card_sets: [];
  desc: string;
  name: string;
  race: string;
  type: string;
}

export const addToFavorites = (card: IFavoritesState) => {
  return (dispatch: any, getState: any) => {
    const data = getState().favorites;

    let favorites;

    const exist = data.findIndex((item: any) => item.id === card.id);

    if (exist >= 0) {
      favorites = data.slice().filter((item: any) => item.id !== card.id);
    } else {
      favorites = data.slice().concat({ ...card });
    }

    dispatch({
      type: types.addFavorite,
      payload: favorites,
    });
  };
};

export const deleteFromFavorites = (id: number) => {
    return (dispatch: any, getState: any) => {
        const data = getState().favorites;
    
        const favorites = data.slice().filter((item: any) => item.id !== id);
    
        dispatch({
        type: types.deleteFavorite,
        payload: favorites,
        });
    };
}