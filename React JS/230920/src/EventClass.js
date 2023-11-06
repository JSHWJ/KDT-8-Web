import { Component } from "react";

class EventClass extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this);
    alert("클래스형 컴포넌트");
  }

  handleClick2() {
    console.log("화살표함수", this);
    alert("클래스형 컴포넌트 2번");
  }

  render() {
    return (
      <>
        <button onClick={this.handleClick}>클릭Class</button>
      </>
    );
  }
}

export default EventClass;
