import Item from "./Item";

function ItemsList({ items }) {
  return (
    <ul className=" overflow-auto">
      {items.map((item) => {
        return <Item item={item} key={item.name} />;
      })}
    </ul>
  );
}

export default ItemsList;
