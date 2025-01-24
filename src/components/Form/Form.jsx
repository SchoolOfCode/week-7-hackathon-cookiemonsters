import "./Form.css";

function Form({ handleCardAddClick }) {
  return (
    <form method="post" onSubmit={(e) => handleCardAddClick(e)}>
      <label className="questionlabel" htmlFor="question">
        Question:
      </label>
      <input name="question" id="question"></input>
      <label className="answerlabel" htmlFor="answer">
        Answer:
      </label>
      <input name="answer" id="answer"></input>
      <button type="submit">Add</button>
    </form>
  );
}

export default Form;
