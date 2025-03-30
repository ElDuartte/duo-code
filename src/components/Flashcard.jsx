import { useState } from "react";
import Results from "./Results";
import questions from "../assets/questions.json";
import {
  getCurrentCard,
  setCurrentCard,
  setScore,
  getCurrentScore,
  initializeScore,
} from "../Utils";

function Flashcard() {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [result, setResult] = useState({});
  const [showResults, setShowResults] = useState(false);

  // Check if questions array is loaded
  if (!questions || !questions.cards || !questions.cards.length) {
    return <div>Error: Questions data is missing.</div>;
  }

  const currentQuestionId = getCurrentCard();
  const currentQuestion = questions.cards[currentQuestionId];

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
        question: currentQuestion.question,
        status: "wrong",
        message:
          currentQuestion.why.wrong[selectedAnswer] || "Incorrect answer.",
      });
    } else {
      setResult({ status: "none", message: "Please select an answer." });
    }

    setShowResults(true);
  };

  const handleReset = () => {
    //manual reset for testing
    setCurrentCard(0);
  };

  initializeScore();
  const handleScorePlus = () => {
    // if (getCurrentScore === 0) { }
    setScore(getCurrentScore() + 1);
  };

  const handleScoreMinus = () => {
    if (getCurrentScore !== 0) {
      setScore(getCurrentScore() - 1);
    }
    setScore(0);
  };

  const handleScoreReset = () => {
    setScore(0);
  };

  const toggleShowResult = () => {
    if (showResults) {
      setShowResults(false);
    } else {
      setShowResults(true);
    }
  };

  return (
    <>
      <div className="score-buttons-container">
        <button className="reset-button" onClick={handleReset}>
          questions reset
        </button>
        <button className="score-plus-button" onClick={handleScorePlus}>
          score plus
        </button>
        <button className="score-reset-button" onClick={handleScoreReset}>
          score reset
        </button>
        <button className="score-minus-button" onClick={handleScoreMinus}>
          score minus
        </button>
      </div>

      {!showResults ? (
        <div className="flashcard-container">
          <h1>Score: {getCurrentScore()}</h1>
          <h1 className="question">
            {currentQuestionId + 1}) {currentQuestion.question}
          </h1>
          <div className="answers-container">
            {currentQuestion.answers.map((option, index) => (
              <div
                key={index}
                className={`answer-option ${
                  selectedAnswer === option ? "selected" : ""
                }`}
                onClick={() => setSelectedAnswer(option)}
              >
                {index + 1}) {option}
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
          <Results
            response={result}
            showResults={() => {
              toggleShowResult();
            }}
          />
        </>
      )}
    </>
  );
}

export default Flashcard;
