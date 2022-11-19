import { Search } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { pokemonTypes } from "../../pokemonTypes";

import "./Pokeinfo.css";

const Pokeinfo = ({ data }) => {
  // return (
  //   <button
  //     className="filter-button"
  //     onClick={() => {
  //       handleClose();
  //       fetchFilter(`${name}`);
  //     }}
  //     style={{ backgroundColor: `${color}` }}
  //   >
  //     <img src={imgUrl} width={16} height={16} alt={name} color={color} />
  //     {name}
  //   </button>

  return (
    <>
      {!data ? (
        ""
      ) : (
        <div className="info-card">
          <h1 className="info-name">{data.name}</h1>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${data.id}.png`}
            alt=""
            height={160}
          />
          <div className="abilities">
            {data.types.map((poke) => {
              const [{ name, color }] = pokemonTypes.filter(
                (item) => item.name === poke.type.name
              );

              const imgUrl = require(`/src/assets/pokemonTypes/${name}.svg`);
              return (
                <>
                  <div className="type" style={{ backgroundColor: `${color}` }}>
                    <img
                      src={imgUrl}
                      width={16}
                      height={16}
                      alt={name}
                      color={color}
                    />
                    <h2>{poke.type.name}</h2>
                  </div>
                </>
              );
            })}
          </div>
          <div className="base-stat">
            {data.stats.map((poke) => {
              return (
                <>
                  <h3>
                    {poke.stat.name}:{poke.base_stat}
                  </h3>
                </>
              );
            })}
          </div>
          <Button variant="contained">
            <Search />
            View More
          </Button>
        </div>
      )}
    </>
  );
};
export default Pokeinfo;
