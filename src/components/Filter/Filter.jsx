import React, { useEffect, useState } from "react";
import { pokemonTypes } from "../../pokemonTypes";
import "./Filter.css";

const Filter = ({ fetchFilter, type }) => {
  const [{ name, color }] = pokemonTypes.filter((item) => item.name === type);

  const imgUrl = require(`/public/assets/pokemonTypes/${name}.svg`);

  return (
    <div>
      <button
        className="filter-button"
        onClick={() => fetchFilter(`${name}`)}
        style={{ backgroundColor: `${color}` }}
      >
        <img src={imgUrl} width={16} height={16} alt={name} />
        {name}
      </button>
    </div>
  );
};
export default Filter;
