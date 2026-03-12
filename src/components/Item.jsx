import { useState } from "react";
import ItemModal from "./ItemModal";

function Item({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="border-2 rounded-2xl flex flex-col items-center justify-center p-2"
      >
        <div className="w-12 h-12">
          <img src={item.image_url} alt={item.name} />
        </div>
        <p className="font-bold text-2xl">{item.name}</p>
        <p className="text-xl">Posizione - {item.location}</p>
      </div>

      {isOpen && <ItemModal item={item} setIsOpen={setIsOpen} />}
    </>
  );
}

export default Item;
