import axios from "axios";
import { types } from "./types";

interface IHomeState {
  id: number,
  archetype: string,
  card_images: [],
  card_prices: [],
  card_sets: [],
  desc: string,
  name: string,
  race: string,
  type: string,
}

export const getDataCards = () => {
  return async (dispatch: any) => {
    const response = await axios.get(
      "https://db.ygoprodeck.com/api/v7/cardinfo.php?type=Effect%20Monster&race=Dragon"
    );

    const data = response.data.data.map( (item:IHomeState) => ({
      ...item,
      favorite: false
    }))

    dispatch({
      type: types.getCards,
      payload: data,
    });
  };
};
