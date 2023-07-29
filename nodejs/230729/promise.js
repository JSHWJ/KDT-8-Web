// promise 객체를 promise1 삼수 정의
function promise1(flag) {
  return new Promise(function (resolve, reject) {
    if (flag) {
      resolve("promise 상태는 fulfilled, 이 때 flag 값은 true");
    } else {
      reject("promise 상태는 rejected, 이 때 flag 값은 false");
    }
  });
}

promise1(true)
  .then(function (result) {
    console.log(result);
  })
  .catch(function (err) {
    //에러처리
    console.log(err);
  });

//######################

let price;
let product;
goMart();
pickDrink()
  .then(pay)
  .catch((err) => {
    console.log(err);
    //function(err){
    //     console.log(err);
    // }
  });
// pay(product, price);

function goMart() {
  console.log("마트에 와서 어떤 음료 마실까??");
}

function pickDrink() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("고민끝");
      product = "제로 콜라";
      price = 3000;
      if (price >= 2000) {
        resolve();
      } else {
        reject("돈이 부족해요");
      }
    }, 3000);
  });
}

function pay(product, price) {
  console.log(`상품명:${product},가격:${price}`);
}

function add(n1, n2) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = n1 + n2;
      resolve(result);
    }, 1000);
  });
}

function mul(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = n * 2;
      resolve(result);
    }, 700);
  });
}

function sub(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = n - 1;
      reject(new Error("에러 처리"));
    }, 500);
  });
}

add(4, 3)
  .then(function (result) {
    console.log("1: ", result);
    return mul(result);
  })
  .then(function (result) {
    console.log("2: ", result);
    return sub(result);
  })
  .then(function (result) {
    console.log("3: ", result);
  })
  .catch(function (err) {
    console.log("실패!");
    console.log(err);
  });
