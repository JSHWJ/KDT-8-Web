import React, { useState, useRef } from "react";
import "./Form.css";

const UseRefForm = () => {
  const myInputWriter = useRef();
  const myInputTitle = useRef();

  const [state, setState] = useState({
    writer: "",
    title: "",
    tableData: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addContent = () => {
    const { writer, title, tableData } = state;

    if (writer && title) {
      const newItem = {
        writer,
        title,
      };

      setState((prevState) => ({
        ...prevState,
        tableData: [...tableData, newItem],
        writer: "",
        title: "",
      }));
    } else {
      if (!writer) {
        myInputWriter.current.focus(); // 작성자 입력란에 포커스
      } else if (!title) {
        myInputTitle.current.focus(); // 제목 입력란에 포커스
      }
    }
  };

  const { writer, title, tableData } = state;

  return (
    <div className="FormCss">
      <div className="input">
        작성자:{" "}
        <input
          type="text"
          name="writer"
          value={writer}
          ref={myInputWriter}
          onChange={handleInputChange}
        />
        제목:{" "}
        <input
          type="text"
          name="title"
          value={title}
          ref={myInputTitle}
          onChange={handleInputChange}
        />
        <button onClick={addContent}>작성</button>
      </div>

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
  );
};

export default UseRefForm;
