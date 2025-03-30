import React from "react";
import { Link } from "react-router-dom";
import { getCurrentCard, setCurrentCard } from "../Utils";
import questions from "../assets/questions.json";

function Results({ response }) {
  const currentCardIndex = getCurrentCard();
  const totalCards = questions.length;

  const handleNext = () => {
    const newCardIndex = Math.min(currentCardIndex + 1, totalCards - 1);
    setCurrentCard(newCardIndex);
  };

  const handlePrevious = () => {
    const newCardIndex = Math.max(currentCardIndex - 1, 0);
    setCurrentCard(newCardIndex);
  };

  return (
    <div className={`result ${response.status} flashcard-container`}>
      <h2>Question {currentCardIndex + 1}</h2>
      <br />
      <h3>{response.question}</h3>
      <br />
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

        <Link to="/">
          <button
            onClick={handleNext}
            disabled={response.id === 0 || currentCardIndex === response.id}
            style={{
              padding: "10px",
              backgroundColor: "#2196F3",
              color: "white",
              borderRadius: "4px",
            }}
          >
            Next
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Results;
