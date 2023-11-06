import { Component } from "react"; //1번 방법
//import React from 'react' //2번 방법

// class 형 컴포넌트
// class 컴포넌트명 extends Component

//class ClassComponent extends React.Component{} //2번 방법
class Larva extends Component {
  render() {
    const parent = {
      position: "relative",
    };
    const circle = {
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      position: "absolute",
    };
    const circle1 = {
      backgroundColor: "rgb(22, 144, 146)",
      top: "90px",
      left: "250px",
      zIndex: "6",
    };
    const circle2 = {
      backgroundColor: "lightblue",
      top: "90px",
      left: "200px",
      zIndex: "4",
    };
    const circle3 = {
      backgroundColor: "rgb(24, 8, 139)",
      top: "100px",
      left: "150px",
      zIndex: "3",
    };
    const circle4 = {
      backgroundColor: "rgb(69, 119, 211)",
      top: "65px",
      left: "110px",
      zIndex: "2",
    };
    const circle5 = {
      backgroundColor: "rgb(54, 150, 234)",
      top: "20px",
      left: "40px",
      zIndex: "1",
    };
    const whiteEye = {
      width: "35px",
      height: "35px",
      backgroundColor: "white",
      top: "40px",
      left: "60px",
      zIndex: "7",
    };
    const blackEye = {
      width: "17px",
      height: "17px",
      backgroundColor: "black",
      top: "47px",
      left: "60px",
      zIndex: "8",
    };
    // const green = {
    //   top: "130px",
    //   width: "500px",
    //   height: "120px",
    //   position: "absolute",
    //   zIndex: "5",
    // }

    return (
      <>
        <div style={parent}>
          <div style={{ ...circle, ...circle1 }}></div>
          <div style={{ ...circle, ...circle2 }}></div>
          <div style={{ ...circle, ...circle3 }}></div>
          <div style={{ ...circle, ...circle4 }}></div>
          <div style={{ ...circle, ...circle5 }}></div>
          <div style={{ ...circle, ...whiteEye }}></div>
          <div style={{ ...circle, ...blackEye }}></div>
          {/* <img class="green" src="../image/green.png" /> */}
        </div>
      </>
    );
  }
}

export default Larva;
