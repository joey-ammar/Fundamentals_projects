import SingleQuestion from "./SingleQuestion";
import "./Questions.css";
const Question = ({ questions, activeId, toggleSingleQuestion }) => {
  return (
    <section className="container">
      <h1>Question</h1>
      {questions.map((question) => {
        return (
          <SingleQuestion
            key={question.id}
            {...question}
            activeId={activeId}
            toggleSingleQuestion={toggleSingleQuestion}
          />
        );
      })}
    </section>
  );
};
export default Question;
