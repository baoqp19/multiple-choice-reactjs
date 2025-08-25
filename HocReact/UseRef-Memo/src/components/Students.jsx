import React, { useState } from "react";
import data from "./db.json"; // import dữ liệu từ db.json

const Students = () => {
  const { students } = data; // Truy cập vào mảng students từ đối tượng dữ liệu
  const [keyword, setKeyword] = useState("");
  const handleSearch = (e) => {
    
    setKeyword(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Từ khóa..."
        onChange={handleSearch}
        value={keyword}
      />
      <h2>Danh sách sinh viên</h2>
      {students.map(({ id, fullName }) => {
        const position = fullName.toLowerCase().indexOf(keyword.toLowerCase());
        if (position !== -1) {
          return (
            <h3 key={id}>
              {fullName.slice(0, position)}
              <span style={{ background: "yellow" }}>
                {fullName.slice(position, position + keyword.length)}
              </span>
              {fullName.slice(position + keyword.length)}
            </h3>
          );
        }
        <h3 key={id}>{fullName}</h3>;
      })}
    </div>
  );
};

export default Students;








