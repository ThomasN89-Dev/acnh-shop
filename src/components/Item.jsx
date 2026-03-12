import { useState } from "react";
import ItemModal from "./ItemModal";

function Item({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div onClick={() => setIsOpen(true)}>
        <div className="w-12 h-12">
          <img src={item.image_url} alt={item.name} />
        </div>
        <p>{item.name}</p>
        <p>{item.location}</p>
      </div>

      {isOpen && <ItemModal item={item} setIsOpen={setIsOpen} />}
    </>
  );
}

export default Item;
