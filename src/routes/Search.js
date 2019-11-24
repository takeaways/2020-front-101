import React from "react";

const Search = ({ location }) => {
  const getQuery = new URLSearchParams(location.search);
  console.log(getQuery.get("keyword"));
  return (
    <div>
      <h1>Search</h1>
      {getQuery.get("keyword")}
    </div>
  );
};

export default Search;
