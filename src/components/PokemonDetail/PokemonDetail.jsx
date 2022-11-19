import React, { useState, useEffect } from "react";
import { pokemonTypes } from "../../pokemonTypes";
import { NavLink, useParams } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import axios from "axios";
import "./PokemonDetail.css";

const PokemonDetail = () => {
  const [pokemon, setPokemonData] = useState({});
  const [pokemonSpecies, setPokemonSpecies] = useState({});

  const { category } = useParams();

  useEffect(() => {
    const callFetch = async () => {
      const pokemonData = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${category}`
      );

      const pokemonSpeciesData = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${category}`
      );

      setPokemonData(pokemonData);
      setPokemonSpecies(pokemonSpeciesData);
    };

    callFetch().catch(console.error);
  }, []);

  console.log(pokemon);
  console.log(pokemonSpecies);
  return (
    <>
      <div className="pokemon-detail">
        <NavLink to="/">
          <ArrowBackIosIcon className="back-button" fontSize="large" />
        </NavLink>
        <div className="pokemon-info">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.data?.id}.png`}
            alt=""
            height={160}
          />
          <div>#{pokemon.data?.id}</div>
          <div>{pokemon.data?.name}</div>
          <div className="abilities">
            {pokemon.data?.types.map((poke) => {
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
          <div className="pokemon-description">description</div>
        </div>
      </div>
    </>
  );
};
export default PokemonDetail;
