import React from "react";
import Villager from "./Villager";

function VillagerList({ items }) {
  return (
    <ul className=" overflow-auto grid grid-cols-3 gap-2">
      {items.map((item) => {
        return <Villager item={item} key={item.name} />;
      })}
    </ul>
  );
}

export default VillagerList;
