import { Component } from "react";

class Vanish extends Component {
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
    text: "안녕하세요",
  };

  getVanished = () => {
    this.setState((prevState) => ({ text: "" }));
  };

  render() {
    return (
      <div>
        <h1>{this.state.text}</h1>
        <button onClick={this.getVanished}>사라져라</button>
      </div>
    );
  }
}

export default Vanish;
