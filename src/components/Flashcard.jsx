import { useState } from "react";

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

  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setSelectedAnswer(e.target.value);
  };

  const handleNext = () => {
    if (selectedAnswer === questionsObj.correct) {
      setResult({ status: "correct", message: questionsObj.why.correct });
    } else if (selectedAnswer) {
      setResult({
        status: "wrong",
        message: questionsObj.why.wrong[selectedAnswer],
      });
    } else {
      setResult({ status: "none", message: "Please select an answer." });
    }
  };

  return (
    <div className="flashcard-container">
      <h1 className="question">{questionsObj.question}</h1>
      <div className="answers-container">
        {questionsObj.answers.map((ele, index) => (
          <div key={index} className="answer-option">
            <input
              type="radio"
              id={`answer-${index}`}
              name="answer"
              value={ele}
              checked={selectedAnswer === ele}
              onChange={handleChange}
            />
            <label htmlFor={`answer-${index}`} className="answer text-code">
              {ele}
            </label>
          </div>
        ))}
      </div>
      <div className="flashcard-button-container">
        <button type="button" onClick={handleNext}>
          Next
        </button>
      </div>
      {result && (
        <div className={`result ${result.status}`}>
          <p>{result.message}</p>
        </div>
      )}
    </div>
  );
}
export default Flashcard;
