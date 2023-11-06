import "./Larvar.scss";
import greenImage from "./green.png";

export default function Larvar() {
  return (
    <body>
      <div class="parent">
        <div class="circle circle1"></div>
        <div class="circle circle2"></div>
        <div class="circle circle3"></div>
        <div class="circle circle4"></div>
        <div class="circle circle5"></div>
        <div class="circle white_eye"></div>
        <div class="circle black_eye"></div>
        <img alt="" className="green" src={greenImage} />
      </div>
    </body>
  );
}
