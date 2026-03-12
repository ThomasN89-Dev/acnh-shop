import React from "react";

function FilterBar({ searchText, setSearchText }) {
  return (
    <form>
      <input
        className="border-2"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </form>
  );
}

export default FilterBar;
