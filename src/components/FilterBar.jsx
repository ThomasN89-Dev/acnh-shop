import React from "react";

function FilterBar({ searchText, setSearchText }) {
  return (
    <div className="px-4 mb-2 w-full">
      <form>
        <input
          className="border-2 bg-white pl-2 w-full rounded-2xl"
          placeholder="Cosa stai cercando?"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </form>
    </div>
  );
}

export default FilterBar;
