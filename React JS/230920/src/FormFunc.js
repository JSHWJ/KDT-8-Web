import { useState } from "react";
import "./FormCss.css";

export default function FormFunc() {
  const [status, setStatus] = useState({
    writer: "",
    title: "",
    tableData: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // 이전 상태를 복사하고 변경할 값을 추가하여 새로운 상태를 생성
    setStatus((prevStatus) => ({
      ...prevStatus,
      [name]: value,
    }));
  };

  const addContent = () => {
    const { writer, title, tableData } = status;

    if (writer && title) {
      const newItem = {
        writer,
        title,
      };

      setStatus({
        tableData: [...tableData, newItem],
        writer: "",
        title: "",
      });
    }
  };

  const { writer, title, tableData } = status;

  return (
    <div className="FormCss">
      <div class="input">
        작성자:{" "}
        <input
          type="text"
          name="writer"
          value={writer}
          onChange={handleInputChange}
        />
        제목:{" "}
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleInputChange}
        />
        <button onClick={addContent}>작성</button>
      </div>

      <div>
        <select name="fruits" class="select">
          <option disabled selected value="s_writer">
            작성자 🍊
          </option>
          <option value="s_title">title</option>
        </select>

        <table>
          <tr>
            <th>번호</th> <th>제목</th> <th>작성자</th>
          </tr>
          {tableData.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td>{item.writer}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
