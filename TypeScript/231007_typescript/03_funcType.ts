// 03_funcType.ts

// 자바스크립트 경우
// function jsPrint(a, b) {
//   console.log(a);
//   console.log(b);
// }
// TS: 선언된 매개변수의 개수와 함수 호출시 전달되는 파라미터의 개수가 동일해야함
// jsPrint(1, 2, 3);

function print(a: number, b: number, c?: number) {
  console.log(a);
  console.log(b);
  console.log(c);
}

print(1, 2, 3);
print(1, 2);

function print2(a: number, b: number, c = 5) {
  console.log("--------print2--------");
  console.log(a);
  console.log(b);
  console.log(c);
}

print2(1, 2);
print2(1, 2, 3);

// void 말고 다른 리턴 타입
function concatStr(a: string, b: string): string {
  return a + b;
}

// 함수 표현식
const squareArea = (a: number, b: number): number => {
  return a * b;
};

const squareArea2 = (a: number, b: number) => a * b;

// 함수 호출하기
console.log("문자열 더하기 " + concatStr("hi ", "str"));
console.log("사각형 넓이 : ", squareArea(3, 4));
console.log(`사각형 넓이 :  ${squareArea(3, 4)}`);

// never 타입
// never X : 특정 조건에서만 빠져나갈 수 있고, 어떤 조건에서는 무한루프
// never: 항상 함수 끝에 도달하지 않는 경우
function goingOn(a: number): never {
  while (true) {
    console.log("go");
    // if (a > 10) break; // error
  }
}
