import "../styles/Flashcard.css";

function Flashcard() {
  const questionsObj = {
    id: 1,
    question: "What is the output of `typeof null` in JavaScript?",
    answers: ["object", "null", "undefined", "string"],
    correct: "object",
    why: {
      correct:
        "Due to a historical bug in JavaScript, `typeof null` incorrectly returns 'object'.",
      wrong: {
        null: "`null` is a value, not a type.",
        undefined:
          "`undefined` represents an uninitialized variable, whereas `null` is an assigned value.",
        string: "`null` is not a string; it's a special primitive value.",
      },
    },
  };
  return (
    <>
      <div className="flashcard-container">
        <h1 className="question">{questionsObj.question}</h1>
        <div className="answers-container">
          {questionsObj.answers.map((ele, index) => (
            <p className="answer">{ele}</p>
          ))}
        </div>
        <div className="flashcard-button-container">
          <button type="button">Back</button>
          <button type="button">Next</button>
        </div>
      </div>
    </>
  );
}
export default Flashcard;
