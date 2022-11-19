import { Search } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { pokemonTypes } from "../../pokemonTypes";
import WeightIcon from "../../../src/assets/weight-icon.svg";
import HeightIcon from "../../../src/assets/height-icon.svg";

import "./Pokeinfo.css";

const Pokeinfo = ({ data }) => {
  console.log(data);

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
                    <span>{poke.type.name}</span>
                  </div>
                </>
              );
            })}
          </div>
          <div className="abilities">
            <div className="group">
              <img src={WeightIcon} />
              <h2>{data.weight / 10} kg</h2>
            </div>
            <div className="group">
              <img src={HeightIcon} />
              <h2>{data.height / 10} m</h2>
            </div>
          </div>
          {/* <div className="abilities">
            {data.abilities.map((poke) => {
              return (
                <>
                  <div className="group">
                    <h2>{poke.ability.name}</h2>
                  </div>
                </>
              );
            })}
          </div> */}
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
          <Button variant="contained" className="view-more">
            <Search />
            View More
          </Button>
        </div>
      )}
    </>
  );
};
export default Pokeinfo;
