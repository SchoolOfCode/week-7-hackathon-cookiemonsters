function Form({ handleCardAddClick }) {
  return (
    <form method="post" onSubmit={(e) => handleCardAddClick(e)}>
      <label htmlFor="question">Question</label>
      <input
        placeholder="write something here"
        name="question"
        id="question"
      ></input>
      <label htmlFor="answer">Answer</label>
      <input
        placeholder="write something here"
        name="answer"
        id="answer"
      ></input>
      <button type="submit">Add</button>
    </form>
  );
}

export default Form;
