import React from "react";
import { pokemonTypes } from "../../pokemonTypes";
import "./Card.css";

const Card = ({ pokemon, loading, infoPokemon }) => {
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pokemon.map((item) => {
          if (item.name) {
            const [{ color }] = pokemonTypes.filter(
              (type) => type?.name === item?.types[0]?.type?.name
            );
            return (
              <>
                <div
                  className="card"
                  key={item.id}
                  onClick={() => infoPokemon(item)}
                  style={{ backgroundColor: `${color}` }}
                >
                  <span className="card-name">#{item.id}</span>
                  <img
                    src={item.sprites?.other.home.front_default}
                    height={128}
                    width={128}
                    alt=""
                  />
                  <span className="card-name">{item.name}</span>
                </div>
              </>
            );
          }
        })
      )}
    </>
  );
};
export default Card;
