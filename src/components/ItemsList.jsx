import React from "react";

function ItemsList({ items }) {
  return (
    <ul className=" overflow-auto">
      {items.map((item) => {
        return <li key={item.number}>{item.name}</li>;
      })}
    </ul>
  );
}

export default ItemsList;
