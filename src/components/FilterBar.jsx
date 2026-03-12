import React from "react";

function FilterBar({ searchText, setSearchText }) {
  return (
    <form>
      <input
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </form>
  );
}

export default FilterBar;
