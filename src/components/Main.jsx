import React from "react";
import Card from "./Card/Card";
import Pokeinfo from "./Pokeinfo/Pokeinfo";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Search from "./Search/Search";
import Filter from "./Filter/Filter";
import { pokemonTypes } from "../pokemonTypes";

const Main = () => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [pokeDex, setPokeDex] = useState();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const pokeFun = async () => {
    setLoading(true);
    const res = await axios.get(url);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemon(res.data.results);
    setLoading(false);
  };
  const getPokemon = async (res) => {
    console.log(res);
    res.map(async (item) => {
      const result = await axios.get(item.url);
      setPokeData((state) => {
        state = [...state, result.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
    });
  };

  useEffect(() => {
    pokeFun();
  }, []);

  const fetchSearch = async (value) => {
    if (value) {
      try {
        const result = await axios.get(`${url}${value}`);
        setPokeData((state) => {
          state = [result.data];
          state.sort((a, b) => (a.id > b.id ? 1 : -1));
          return state;
        });
      } catch (e) {
        console.log(e);
      }
    } else {
      setPokeData([]);
    }
  };

  const fetchFilter = async (value) => {
    if (value) {
      try {
        const result = await axios.get(
          `https://pokeapi.co/api/v2/type/${value}`
        );
        console.log(result);
        const filteredPokemon = result.data.pokemon;
        filteredPokemon.map(async (item) => {
          setPokeData([]);
          const result = await axios.get(item.pokemon.url);
          setPokeData((state) => {
            state = [...state, result.data];
            state.sort((a, b) => (a.id > b.id ? 1 : -1));
            return state;
          });
        });
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <>
      <div className="header">Pokedex</div>
      <div className="search-filter-container">
        <Search fetchSearch={fetchSearch} />
        {pokemonTypes.map(({ name }) => {
          return <Filter fetchFilter={fetchFilter} type={name} />;
        })}
      </div>
      <div className="container">
        <div className="left-content">
          <Card
            pokemon={pokeData}
            loading={loading}
            infoPokemon={(poke) => setPokeDex(poke)}
          />

          <div className="btn-group">
            {prevUrl && (
              <button
                onClick={() => {
                  setPokeData([]);
                  setUrl(prevUrl);
                }}
              >
                Previous
              </button>
            )}
            {nextUrl && (
              <button
                onClick={() => {
                  setPokeData([]);
                  setUrl(nextUrl);
                }}
              >
                Next
              </button>
            )}
          </div>
        </div>
        <div className="right-content">
          <Pokeinfo data={pokeDex} />
        </div>
      </div>
    </>
  );
};
export default Main;
