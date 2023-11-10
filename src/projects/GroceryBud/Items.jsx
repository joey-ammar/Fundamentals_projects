import SingleItem from "./SingleItem";

const Items = ({ items, removeItem, edititem }) => {
  return (
    <div className="items">
      {items.map((item) => {
        return (
          <SingleItem
            edititem={edititem}
            key={item.id}
            item={item}
            removeItem={removeItem}
          />
        );
      })}
    </div>
  );
};
export default Items;
