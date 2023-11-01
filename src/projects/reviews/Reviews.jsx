import { useState } from "react";
import people from "./data";
import "./Reviews.css";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
const Reviews = () => {
  let [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const nextPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex + 1;
      // if we reach the last person i reset to the first one
      if (newIndex > people.length - 1) {
        return 0;
      }
      return newIndex;
    });
  };
  const prevPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex - 1;
      // if i reach 0 i will reset to the last person
      if (newIndex < 0) {
        return people.length - 1;
      }
      return newIndex;
    });
  };

  const randomPeron = (index) => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      return (randomNumber = index + 1);
    }
    setIndex(randomNumber);
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button onClick={randomPeron} className="btn btn-hipster">
          Surprise me
        </button>
      </article>
    </main>
  );
};
export default Reviews;
