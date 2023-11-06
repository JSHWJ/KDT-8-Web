import React from "react";
import "./Form.css";

class RefForm extends React.Component {
  myInputWriter = React.createRef(); // 작성자 입력란 ref
  myInputTitle = React.createRef(); // 제목 입력란 ref

  state = {
    writer: "",
    title: "",
    tableData: [],
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  addContent = () => {
    const { writer, title, tableData } = this.state;

    if (writer && title) {
      const newItem = {
        writer,
        title,
      };

      this.setState({
        tableData: [...tableData, newItem],
        writer: "",
        title: "",
      });
    } else {
      if (!writer) {
        this.myInputWriter.current.focus(); // 작성자 입력란에 포커스
      } else if (!title) {
        this.myInputTitle.current.focus(); // 제목 입력란에 포커스
      }
    }
  };
  render() {
    const { writer, title, tableData } = this.state;
    return (
      <div className="FormCss">
        <div class="input">
          작성자:{" "}
          <input
            type="text"
            name="writer"
            value={writer}
            ref={this.myInputWriter}
            onChange={this.handleInputChange}
          />
          제목:{" "}
          <input
            type="text"
            name="title"
            value={title}
            ref={this.myInputTitle}
            onChange={this.handleInputChange}
          />
          <button onClick={this.addContent}>작성</button>
        </div>

        <div>
          <select name="fruits" class="select">
            <option disabled selected value="s_writer">
              작성자 🍊
            </option>
            <option value="s_title">title</option>
          </select>

          <button onClick={this.addContent}>검색</button>
          <button onClick={this.addContent}>전체</button>
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
  }
}

export default RefForm;
