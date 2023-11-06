import { Component } from "react";

class Prac extends Component {
  showMessage = () => {
    alert(this.props.message);
  };

  render() {
    return (
      <>
        <button onClick={this.showMessage}>Show Message</button>
      </>
    );
  }
}

export default Prac;
