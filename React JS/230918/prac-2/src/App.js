// import Test from "./Test";
// import Test2 from "./Test2";
import FoodComponent from "./FoodComponent";
import BookComponent from "./BookComponent";
import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";

function App() {
  return (
    <>
      {/* <Test></Test>
      <Test2 /> */}
      {/* <ClassComponent name="서혜원"></ClassComponent>
      <FunctionComponent name="kdt8" age={12}></FunctionComponent> */}
      <BookComponent
        title="나의 하루는 4시 40분에 시작된다"
        author="김유진"
        price="13,500원"
        type="자기계발서"
      ></BookComponent>
    </>
  );
}
export default App;
