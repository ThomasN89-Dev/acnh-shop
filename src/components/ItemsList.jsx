import React from "react";

function ItemsList({ items }) {
  return (
    <ul className="h-4/5 overflow-auto mb-9">
      {items.map((item) => {
        return <li key={item.number}>{item.name}</li>;
      })}
    </ul>
  );
}

export default ItemsList;
