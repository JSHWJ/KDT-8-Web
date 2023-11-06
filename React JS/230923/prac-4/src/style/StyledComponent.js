import styled from "styled-components";

const _BoxOne = styled.div`
  background-color: blue;
  width: 100px;
  height: 100px;
`;

const _BoxTwo = styled.div`
  background-color: ${(props) => props.color};
  width: 100px;
  height: 100px;
`;

const _CircleOne = styled.div`
  border-radius: 50px;
`;

const _Btn = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 15px;
  border-radius: 4px;
`;
//태그 옵션 넣는 방법
const _Input = styled.input.attrs({ required: true })``;

//중첩
const _BoxThree = styled.div`
  width: 200px;
  height: 100px;
  background-color: aqua;
  line-height: 100px;
  text-align: center;

  p {
    color: red;
    font-weight: 900;

    &:hover {
      font-size: 32px;
    }

    //p:hover
  }
`;

export default function StyledComponent() {
  return (
    <div>
      {/* <_BoxOne></_BoxOne>
      <_BoxTwo color="red" />

      <_Btn as="a" href="https://www.naver.com">
        클릭
      </_Btn>
      <_Input /> */}
      <_BoxThree>
        <p>hello</p>
      </_BoxThree>
    </div>
  );
}
