export const setCurrentCard = (index) => {
  document.cookie = `currentCard=${index}`;
};

export const getCurrentCard = () => {
  const cookies = document.cookie.split('; ');
  return cookies.find(c => c.startsWith('currentCard=')) || 0;
};