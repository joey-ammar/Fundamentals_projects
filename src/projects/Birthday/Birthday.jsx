import { useState } from "react";
import data from "./data";
import "./Birthday.css";
import People from "./People";

const Birthday = () => {
  /**Status */
  const [people, setPeople] = useState(data);
  const clearBtn = () => {
    setPeople("");
  };
  const resetBtn = () => {
    setPeople(data);
  };

  return (
    <main>
      <div className="card">
        <div className="container">
          {people ? (
            <div>
              <h3>5 Birthdays Today: </h3>
              <div className="person">
                {people.map((person) => {
                  return <People key={person.id} {...person} />;
                })}
              </div>
              <button onClick={clearBtn} className="btn">
                clear
              </button>
            </div>
          ) : (
            <div>
              <h3>0 birthdays Today :</h3>
              <button onClick={resetBtn} className="btn">
                check
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};
export default Birthday;
