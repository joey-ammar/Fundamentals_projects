import "./index.css";
import { FaAngleDoubleRight } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
//UNIQUE ID PACKAGE
const Duties = ({ duties }) => {
  const id = uuidv4();
  return (
    <div>
      {duties.map((duty, index) => {
        return (
          <div className="job-desc" key={id}>
            <FaAngleDoubleRight className="job-icon" />
            <p>{duty}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Duties;
