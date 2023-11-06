import { Component } from "react";
import pic from "./pic.jpg";

class Test2 extends Component {
  render() {
    const style = {
      color: "orange",
      fontSize: "40px",
      marginTop: "20px",
    };
    return (
      <>
        <div style={style}>
          <h2>안녕하세요</h2>
          <img src={pic} alt="face" />
        </div>
      </>
    );
  }
}

export default Test2;
