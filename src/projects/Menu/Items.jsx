import SingleItem from "./SingleItem";
import "./Menu.css";
const Items = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((singleItem) => {
        return <SingleItem key={singleItem.id} {...singleItem} />;
      })}
    </div>
  );
};
export default Items;
