import React from "react";

function Villager({ item }) {
  return (
    <div className="flex justify-center items-center">
      <img src={item.image_url} alt={item.name} className="w-12 h-16" />
    </div>
  );
}

export default Villager;
