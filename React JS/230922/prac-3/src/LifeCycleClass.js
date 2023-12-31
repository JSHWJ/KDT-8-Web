import { Component } from "react";

class MyComponent extends Component {
  componentDidMount() {
    console.log("Mount!");
  }

  componentDidUpdate() {
    console.log("update!");
  }
  componentWillUnmount() {
    console.log("Unmount");
  }

  render() {
    return (
      <>
        <div>My Component {this.props.number}</div>
      </>
    );
  }
}

class LifeCycleClass extends Component {
  state = {
    number: 0,
    visible: true,
  };

  changeNumberState = () => {
    this.setState({ number: this.state.number + 1 });
  };

  changevisibleState = () => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    return (
      <>
        <button onClick={this.changeNumberState}>PLUS</button>
        <button onClick={this.changevisibleState}>ON/OFF</button>
        {this.state.visible && <MyComponent number={this.state.number} />}
      </>
    );
  }
}
