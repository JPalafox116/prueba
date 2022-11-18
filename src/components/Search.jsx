import React, { useEffect, useState } from "react";

const Search = ({ fetchSearch }) => {
  const [search, setSearch] = useState("");

  const searched = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    fetchSearch(search);
  }, [search]);

  return (
    <input
      value={search}
      placeholder="Search Pokemon"
      onChange={(e) => searched(e)}
    ></input>
  );
};
export default Search;
