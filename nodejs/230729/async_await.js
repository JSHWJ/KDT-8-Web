// async / await

// 구조
// 함수 앞에 async 키워드 붙이기
// 비동기 처리 메서드 앞에 await 붙이기 (기디려줄 것)
// asynk, await 항상 같이 쓰기!

// ###########################

let price;
let product;
goMart();
pickDrink();
// pay(product, price);

function goMart() {
  console.log("마트에 와서 어떤 음료 마실까??");
}

function pickDrink() {
  setTimeout(function () {
    console.log("고민끝");
    product = "제로 콜라";
    price = 2000;
    resolve();
  }, 3000);
}

function pay() {
  console.log(`상품명:${product},가격:${price}`);
}

async function exec() {
  goMart();
  await pickDrink();
  pay();
}
