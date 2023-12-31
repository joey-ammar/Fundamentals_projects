import { useState } from "react";
import "./GroceryBud.css";

const Form = ({ addItem }) => {
  const [newItemName, setNewItemName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItemName) return;
    addItem(newItemName);
    setNewItemName("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>Grocery Bud</h4>
      <div className="form-container">
        <input
          type="text"
          className="form-input"
          value={newItemName}
          onChange={(e) => {
            setNewItemName(e.target.value);
          }}
        />
        <button type="submit" className="btn">
          Add item
        </button>
      </div>
    </form>
  );
};
export default Form;
