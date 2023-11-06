import { Component } from "react";

class Text extends Component {
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
    text: "검정색 글씨",
    color: "black",
  };

  changeRed = () => {
    this.setState((prevState) => ({ text: "빨간색 글씨", color: "red" }));
  };

  changeBlue = () => {
    this.setState((prevState) => ({ text: "파란색 글씨", color: "blue" }));
  };

  render() {
    return (
      <div>
        <h1 style={this.state}>{this.state.text}</h1>
        <button onClick={this.changeRed}>빨간색</button>
        <button onClick={this.changeBlue}>파란색</button>
      </div>
    );
  }
}

export default Text;
