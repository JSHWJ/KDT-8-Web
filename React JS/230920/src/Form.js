import { Component } from "react";
import "./FormCss.css";

class Form extends Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       number: 0,
  //     };

  //     //바인딩
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //     this.handleDecrement = this.handleDecrement.bind(this);
  //   }

  //   handleIncrement() {
  //     this.setState({ number: this.state.number + 1 });
  //   }

  state = {
    writer: "",
    title: "",
    tableData: [],
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  searchContent = () => {
    
  }

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
            onChange={this.handleInputChange}
          />
          제목:{" "}
          <input
            type="text"
            name="title"
            value={title}
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
          <input
            type="text"
            name="search"
            value={search}
            placeholder="검색어"
          />
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

export default Form;
