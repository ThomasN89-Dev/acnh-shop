import React from "react";

function ItemModal({ setIsOpen, item }) {
  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="bg-white rounded-2xl p-6 max-w-sm w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.image_url}
          alt={item.name}
          className="w-24 h-24 mx-auto"
        />
        <h2 className="text-xl font-bold text-center">{item.name}</h2>
        <p>Posizione: {item.location}</p>
        <p>Prezzo Nook: {item.sell_nook}</p>
        {item.sell_cj && <p>Prezzo CJ - {item.sell_cj}</p>}
        {item.sell_flick && <p>Prezzo Flick - {item.sell_flick}</p>}
        {/* aggiungi altri campi che vuoi */}
        <button
          className="mt-4 w-full bg-amber-700 text-white rounded-xl py-2"
          onClick={() => setIsOpen(false)}
        >
          Chiudi
        </button>
      </div>
    </div>
  );
}

export default ItemModal;
