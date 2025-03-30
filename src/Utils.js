export const setCurrentCard = (index) => {
  console.log("Setting current card index:", index);
  if (isNaN(index)) {
    document.cookie = `currentCard=${0}; path=/`;
  } else {
    document.cookie = `currentCard=${index}; path=/`;
  }
};

export const getCurrentCard = () => {
  const cookie = document.cookie
    .split("; ")
    .find((c) => c.startsWith("currentCard="));

  // Default to 0 if no cookie found, parse to integer
  const value = cookie ? parseInt(cookie.split("=")[1], 10) : 0;

  console.log("Retrieved current card index:", value);
  return value;
};

export const setScore = (score) => {
  console.log("Setting current score:", score);
  if (isNaN(score)) {
    document.cookie = `currentScore=${0}; path=/`;
  } else {
    document.cookie = `currentScore=${score}; path=/`;
  }
};

export const getCurrentScore = () => {
  const cookie = document.cookie
    .split("; ")
    .find((c) => c.startsWith("currentScore="));

  // Default to 0 if no cookie found, parse to integer
  const value = cookie ? parseInt(cookie.split("=")[1], 10) : 0;

  console.log("Retrieved current score:", value);
  return value;
};

export const initializeScore = () => {
  if (!document.cookie.includes("currentScore=")) {
    setScore(0);
  }
};
