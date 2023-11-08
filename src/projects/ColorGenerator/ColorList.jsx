import SingleColor from "./SingleColor";
import { nanoid } from "nanoid";
import "./CG.css";
const ColorList = ({ colors }) => {
  return (
    <section className="colors">
      {colors.map((color, index) => {
        return <SingleColor key={nanoid()} color={color} index={index} />;
      })}
    </section>
  );
};
export default ColorList;
