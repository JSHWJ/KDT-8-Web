function call(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(name);
      resolve(name);
    }, 1000);
  });
}

function back() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("back");
      resolve("back");
    }, 1000);
  });
}

function hell() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("callback hell");
    }, 1000);
  });
}

//############## promise 방식
/*
call("kim")
  .then(function (name) {
    console.log(name + "반가워");
    return back();
  })
  .then(function (txt) {
    console.log(txt + "를 실행했구나");
    return hell();
  })
  .then(function (message) {
    console.log("여기는 " + message);
  });
*/

//################ async exec() 방식

async function exec() {
  let name = await call("kim");
  console.log(name + "반가워");
  let txt = await back();
  console.log(txt + "를 실행했구나");
  let message = await hell();
  console.log("여기는 " + message);
}

exec();
