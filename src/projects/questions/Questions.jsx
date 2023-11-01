import { useState } from "react";
import data from "./data";
import "./Questions.css";
import Question from "./Question";

const Questions = () => {
  const [questions, setQuestions] = useState(data);
  const [activeId, setActiceId] = useState(null);

  const toggleSingleQuestion = (id) => {
    const newActiveId = id === activeId ? null : id;
    setActiceId(newActiveId);
  };

  return (
    <main>
      <Question
        questions={questions}
        activeId={activeId}
        toggleSingleQuestion={toggleSingleQuestion}
      />
    </main>
  );
};
export default Questions;
