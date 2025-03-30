import { useState } from "react";
import Results from "./Results";
import questions from "../assets/questions.json";

function Flashcard() {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [result, setResult] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Check if questions array is loaded
  if (!questions || !questions.cards || !questions.cards.length) {
    return <div>Error: Questions data is missing.</div>;
  }

  const currentQuestion = questions.cards[currentIndex];

  const handleNext = () => {
    if (selectedAnswer === currentQuestion.correct) {
      setResult({
        id: currentQuestion.id,
        question: currentQuestion.question,
        status: "correct",
        message: currentQuestion.why.correct,
      });
    } else if (selectedAnswer) {
      setResult({
        id: currentQuestion.id,
        status: "wrong",
        message:
          currentQuestion.why.wrong[selectedAnswer] || "Incorrect answer.",
      });
    } else {
      setResult({ status: "none", message: "Please select an answer." });
    }

    setShowResults(true);
  };

  const handleContinue = () => {
    if (currentIndex < questions.cards.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(""); // Reset answer
      setShowResults(false); // Hide results
    }
  };

  return (
    <>
      {!showResults ? (
        <div className="flashcard-container">
          <h1 className="question">{currentQuestion.question}</h1>
          <div className="answers-container">
            {currentQuestion.answers.map((option, index) => (
              <div
                key={index}
                className={`answer-option ${
                  selectedAnswer === option ? "selected" : ""
                }`}
                onClick={() => setSelectedAnswer(option)}
              >
                {option}
              </div>
            ))}
          </div>
          <div className="flashcard-button-container">
            <button type="button" onClick={handleNext}>
              Submit
            </button>
          </div>
        </div>
      ) : (
        <>
          <Results response={result} />
          <button
            type="button"
            onClick={handleContinue}
            disabled={
              (currentIndex === questions.length) === 0 ||
              currentIndex === questions.length - 1
            }
          >
            {currentIndex === questions.cards.length - 1
              ? "Finish"
              : "Next Question"}
          </button>
        </>
      )}
    </>
  );
}

export default Flashcard;
