import React, { useEffect, useState } from "react";

const Filter = ({ fetchFilter }) => {
  return (
    <div>
      <button onClick={() => fetchFilter("normal")}>Normal</button>
      <button onClick={() => fetchFilter("fire")}>fire</button>
      <button onClick={() => fetchFilter("water")}>water</button>
      <button onClick={() => fetchFilter("grass")}>grass</button>
    </div>
  );
};
export default Filter;
