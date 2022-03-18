import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import {
  addToFavorites,
  deleteFromFavorites,
} from "../redux/favorites/actions";

export const Card = ({ ...props }) => {
  const dataFavorites = useSelector((state: RootState) => state.favorites);
  const dispatch = useDispatch();
  const [showAllDescrip, setShowAllDescrip] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const {
    id,
    archetype,
    card_images,
    card_prices,
    card_sets,
    desc,
    name,
    race,
    type,
    favorites,
    home,
  } = props;
  

  const handleDescription = () => {
    setShowAllDescrip(!showAllDescrip);
  };

  const decription = showAllDescrip ? desc : desc.slice(0, 50);

  const setFavorites = () => {
    dispatch(
      addToFavorites({
        id,
        archetype,
        card_images,
        card_prices,
        card_sets,
        desc,
        name,
        race,
        type,
      })
    );
    const exist = dataFavorites.filter((item: any) => item.id === id);
 
    exist.length > 0 ? setIsFavorite( false) : setIsFavorite( true )
  };

  const removeFavorite = () => {
    dispatch(deleteFromFavorites(id));
  };

  return (
    <div className="card__container-card">
      <div className="card__container-img">
        {favorites && <button className="card__btn-favorites" onClick={removeFavorite}><i className="fa-solid fa-xmark"/> Remove</button>}
        {home && (
          <button className="card__btn-favorites" onClick={setFavorites}>
            <span>
              {isFavorite ? (
                <i className="fa-solid fa-star" />
              ) : (
                <i className="fa-regular fa-star"></i>
              )}
            </span>{" "}
            Favoritos
          </button>
        )}
        <img
          className="card__img-card"
          src={card_images[0].image_url_small}
          alt="Card"
        />
      </div>

      <div className="card__container-info">
        <p className="card__name">{name}</p>
        <p className="card__decription">
          {decription}{" "}
          <span className="card__see-descrip" onClick={handleDescription}>
            {!showAllDescrip ? "See all" : "See less"}
          </span>
        </p>
        <p>
          <span className="card__subtitle">Type:</span> {type}
        </p>
        <p>
          <span className="card__subtitle">Archetype:</span> {archetype}
        </p>
        <p>
          <span className="card__subtitle">Card Code:</span>{" "}
          {card_sets?.[0].set_code}
        </p>
        <p>
          <span className="card__subtitle">Card Rarity:</span>{" "}
          {card_sets?.[0].set_rarity}
        </p>
        <p>
          <span className="card__subtitle">Race:</span> {race}
        </p>
        <p>
          <span className="card__subtitle">Price:</span> Cardmarket:{" "}
          <span className="card__price">
            ${card_prices?.[0].cardmarket_price}
          </span>
          , Tcgplayer:
          <span className="card__price">
            ${card_prices?.[0].tcgplayer_price}
          </span>
          , Amazon:{" "}
          <span className="card__price">${card_prices?.[0].amazon_price}</span>.
        </p>
      </div>
    </div>
  );
};
