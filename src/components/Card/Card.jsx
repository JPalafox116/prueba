import React from "react";
import { pokemonTypes } from "../../pokemonTypes";

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
                  <h2>{item.id}</h2>
                  <img src={item.sprites?.front_default} alt="" />
                  <h2>{item.name}</h2>
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
