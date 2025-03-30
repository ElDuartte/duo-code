import React from "react";
import { Link } from "react-router-dom";
import { getCurrentCard, setCurrentCard } from "../Utils";

function Results({ response, showResults }) {
  const currentCardIndex = getCurrentCard();

  const handleNext = () => {
    const newIndex = currentCardIndex + 1;
    setCurrentCard(newIndex);
    showResults();
  };

  const handlePrevious = () => {
    const newIndex = currentCardIndex - 1;
    setCurrentCard(newIndex);
    showResults();
  };

  return (
    <div className={`result ${response.status} flashcard-container`}>
      <h2>
        The answer for question {currentCardIndex + 1} is {response.status}!
      </h2>
      <h3>{response.question}</h3>
      <p>{response.message}</p>

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={handlePrevious}
          disabled={currentCardIndex === 0}
          style={{
            padding: "10px",
            backgroundColor: "#4CAF50",
            color: "white",
            borderRadius: "4px",
            margin: "0 10px",
          }}
        >
          Previous
        </button>

        <Link
          to="/"
          onClick={handleNext}
          style={{
            padding: "10px",
            backgroundColor: "#2196F3",
            color: "white",
            borderRadius: "4px",
          }}
        >
          Next
        </Link>
      </div>
    </div>
  );
}

export default Results;
