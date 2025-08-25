import react, { useState } from "react";

const quizData = [
  {
    question: "Biến nào sau đây là hợp lệ trong JavaScript?",
    options: ["1variable", "_variable", "var-name", "var name"],
    answer: "_variable",
  },
  {
    question:
      "Trong JavaScript, kiểu dữ liệu nào sau đây là kiểu dữ liệu nguyên thủy (primitive)?",
    options: ["object", "array", "string", "function"],
    answer: "string",
  },
  {
    question:
      "Thuật toán sắp xếp nào sau đây có độ phức tạp trung bình là O(n log n)?",
    options: ["Bubble Sort", "Insertion Sort", "Merge Sort", "Linear Sort"],
    answer: "Merge Sort",
  },
  {
    question: "Kết quả của `typeof null` trong JavaScript là gì?",
    options: ["'null'", "'undefined'", "'object'", "'number'"],
    answer: "'object'",
  },
  {
    question: "Bộ nhớ Stack dùng để làm gì?",
    options: [
      "Lưu trữ dữ liệu dạng hàng đợi",
      "Lưu trữ các lời gọi hàm (function calls)",
      "Lưu ảnh",
      "Lưu video",
    ],
    answer: "Lưu trữ các lời gọi hàm (function calls)",
  },
  {
    question: "Toán tử nào so sánh nghiêm ngặt giá trị và kiểu dữ liệu?",
    options: ["==", "===", "!=", "="],
    answer: "===",
  },
  {
    question: "JSON là viết tắt của gì?",
    options: [
      "Java Syntax Object Notation",
      "JavaScript Object Notation",
      "JavaScript Online Network",
      "Java Server Object Notation",
    ],
    answer: "JavaScript Object Notation",
  },
  {
    question:
      "Cấu trúc dữ liệu nào hoạt động theo nguyên tắc FIFO (First In First Out)?",
    options: ["Stack", "Queue", "Array", "Linked List"],
    answer: "Queue",
  },
  {
    question: "Câu lệnh nào in ra nội dung trong console trình duyệt?",
    options: ["print()", "console.log()", "echo()", "show()"],
    answer: "console.log()",
  },
  {
    question:
      "Khi bạn viết `let x;` trong JavaScript, giá trị ban đầu của x là gì?",
    options: ["null", "0", "undefined", "false"],
    answer: "undefined",
  },
  {
    question: "HTML là gì?",
    options: [
      "Ngôn ngữ lập trình để xử lý logic",
      "Ngôn ngữ đánh dấu để tạo cấu trúc website",
      "Framework của JavaScript",
      "Trình duyệt web",
    ],
    answer: "Ngôn ngữ đánh dấu để tạo cấu trúc website",
  },
  {
    question: "Trong thuật toán, Big O dùng để đo gì?",
    options: [
      "Tốc độ mạng",
      "Thời gian load ảnh",
      "Độ phức tạp của thuật toán",
      "Dung lượng RAM máy tính",
    ],
    answer: "Độ phức tạp của thuật toán",
  },
];

const Quiz = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const [userAnswers, setUserAnswers] = useState(
    Array.from({ length: quizData.length }) // 1 mang rỗng có độ dài bằng số câu hỏi
  );

  const [currentQuestiton, setCurrentQuestion] = useState(0);

  const handleSelectedOption = (option, index) => {
    setSelectedOption(option);

    const newUserAnsers = [...userAnswers];
    newUserAnsers[currentQuestiton] = index;
    setUserAnswers(newUserAnsers);
  };

  const goNext = () => {
    setCurrentQuestion((prev) => prev + 1); // không nên dùng currentQuestiton + 1 vì state nó bất đồng bộ

    const answer = Number(userAnswers[currentQuestiton + 1]);
    const pastOptionSelected = quizData[currentQuestiton + 1].options[answer];

    if (answer !== undefined) {
      setSelectedOption(pastOptionSelected);
    } else {
      setSelectedOption("");
    }
  };
  const goBack = () => {
    if (currentQuestiton > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  return (
    <div>
      <h2>Câu {currentQuestiton + 1}</h2>
      <p>{quizData[currentQuestiton].question}</p>
      {quizData[currentQuestiton].options.map((options, index) => (
        <button
          className={`option ${selectedOption === options ? "selected" : ""}`}
          key={index}
          disabled={!!selectedOption && selectedOption !== options} // !! chuyển về boolean
          onClick={() => handleSelectedOption(options, index)}
        >
          {options}
        </button>
      ))}
      {selectedOption ? (
        selectedOption === quizData[currentQuestiton].answer ? (
          <p className="correct-answer">Câu trả lời của bạn chính xác!</p>
        ) : (
          <p className="incorrect-answer">Câu trả lời chưa chính xác!</p>
        )
      ) : null}
      <div className="nav-buttons">
        <button onClick={goBack}>Quay lại</button>
        <button onClick={goNext}>Câu tiếp</button>
      </div>
    </div>
  );
};
export default Quiz;
