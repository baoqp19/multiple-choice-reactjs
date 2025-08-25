import React from "react";

const Results = (props) => {
  return (
    <div>
      <h2>Kết quả của bạn</h2>
      <p className="result">
        Bạn trả lời đúng {props.score} / {props.totalQuestionNum} câu !
      </p>
      <div className="resultButtonsContainer">
        <button className="result-button" onClick={props.rewatchQuiz}>Xem Lại</button>
        <button className="result-button" onClick={props.reStartQuiz}>
          Làm lại
        </button>
      </div>
    </div>
  );
};

export default Results;
