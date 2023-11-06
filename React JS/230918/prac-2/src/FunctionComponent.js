import PropTypes from "prop-types";

//function 컴포넌트 명, const 컴포넌트명 = ()=> {}
function FunctionComponent(props) {
  //props 대신에 {name}도 가능함 이게 더 일반적
  const myClass = "kdt8";
  return (
    <>
      <div>{myClass}에 오신 것을 환영합니다.</div>
      <div>{props.name}</div>
      <div>{props.age}</div>
      {/* {name}으로 바꾸면 댐 */}
    </>
  );
}

FunctionComponent.defaultProps = {
  name: "kdt",
  age: 10,
};
FunctionComponent.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
};
export default FunctionComponent;
