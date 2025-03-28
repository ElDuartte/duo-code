function Results(response) {
  response = response["response"];

  return (
    <div className={`result ${response.status} flashcard-container`}>
      <p>heloooooooo</p>
      <p>{response["message"]}</p>
      <p>{response["status"]}</p>
    </div>
  );
}

export default Results;
