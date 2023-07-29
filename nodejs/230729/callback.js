//콜백 함수 사용 예시
//메인함수, 함수타입 파라미터 맨 마지막에 하나 더 선언
// const result = param1 + param2;
// cancelIdleCallback(result)

// function pick(){
//     setTimeout(function(){
//         console.log("고민 끝")
//     })
// }
// function pickDrink() {
//     setTimeout(function () {
//       console.log("고민끝");
//       product = "제로 콜라";
//       price = 2000;
//       callback(product,price);
//     }, 3000);
//   }

// function pay(product, price) {
//     console.log(`상품명:${product},가격:${price}`);
// }

// function mainfunc(param1, param2, callback){
//     console.log('result')
// }
// mainfunc(1,2,callbackFunc)

// #########################
// callback hell

// 1초마다 배경색이 변경되는 코드
// 빨->주->노->초->파

setTimeout(function () {
  document.querySelector("body").style.backgroundColor = "red";
});
