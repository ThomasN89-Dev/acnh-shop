import Item from "./Item";

function ItemsList({ items }) {
  return (
    <ul className=" overflow-auto flex flex-col gap-3">
      {items.map((item) => {
        return <Item item={item} key={item.name} />;
      })}
    </ul>
  );
}

export default ItemsList;
