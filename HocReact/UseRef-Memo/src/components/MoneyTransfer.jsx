import React, { useMemo, useState } from "react";

let count = 0;
const MoneyTransfer = () => {
  const [cost, setCost] = useState(0);
  const [histories, setHistoties] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setHistoties([...histories, +cost]); // chuyển sang kiểu number
    setCost("");
  };

  const handleChange = (e) => {
    setCost(e.target.value);
  };

  //   const total = histories.reduce((acc, current) => {
  //     console.log("total"); // mỗi lần nhập số thì in ra nhiều
  //     return acc + current;
  //   }, 0)

  const total = useMemo(() => {   // dựa vào histories để chạy, nếu histories không đổi thì lưu giá trị cũ vào total 
    return histories.reduce((acc, current) => {
        console.log("Total")
      return acc + current;
    }, 0);
  }, [histories]);

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Nhập số tiền..."
          onChange={handleChange}
          value={cost}
        />{" "}
        <button>Add</button>
      </form>
      <h2>Lịch sử chuyển tiền</h2>
      {histories.map((item, index) => (
        <h3 key={index}>{item.toLocaleString()}</h3>
      ))}
      <h2>Tổng tiền: {total.toLocaleString()} </h2>
    </div>
  );
};

export default MoneyTransfer;

/*
 Hook useMemo --> cache (lưu trữ tạm thời dữ liệu) login tính toán --> trả về giá trị 
 -- trả về 1 giá trị phụ thuộc vào giá trị trả về của callBack
 -- callBack trong useMemo phải có return 
 const value = useMemo(callBack, dependencies);
 */
