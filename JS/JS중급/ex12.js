// const pr = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("OK");
//     // reject(new Error('err...'));
//   }, 1000);
// });

// console.log('시작');
// pr.then((result) => {
//   console.log(result);
// }).catch((err) => {
//   console.log(err);
// }).finally(() => {
//   console.log('끝');
// });


// /**/

// const f1 = (callback) => {
//   setTimeout(function() {
//     console.log('1번 주문 완료');
//     callback();
//   }, 1000);
// };

// const f2 = (callback) => {
//   setTimeout(function() {
//     console.log('2번 주문 완료');
//     callback();
//   }, 3000);
// };

// const f3 = (callback) => {
//   setTimeout(function() {
//     console.log('3번 주문 완료');
//     callback();
//   }, 2000);
// };

// console.log('시작');
// f1(function() {
//   f2(function() {
//     f3(function() {
//       console.log('끝');
//     });
//   });
// });


/**/

const f_1 = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('1번 주문 완료');
      // rej(new Error('xx'));
    }, 1000);
  });
};

const f_2 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('2번 주문 완료');
    }, 3000);
  });
};

const f_3 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('3번 주문 완료');
    }, 2000);
  });
};


// // Promise.all
// console.time('x');
// Promise.all([f_1(), f_2(), f_3()]).then(res => {
//     console.log(res);
//     console.timeEnd('x');
// });

// // Promise.race
// console.time('x');
// Promise.race([f_1(), f_2(), f_3()]).then(res => {
//     console.log(res);
//     console.timeEnd('x');
// });

// // 프로미스 체이닝 (Promises chaining)
// console.time('시작');
// f_1()
//   .then((res) => f_2(res))
//   .then((res) => f_3(res))
//   .then((res) => console.log(res))
//   .catch(console.log)
//   .finally(() => {
//     // console.log('끝');
//     console.timeEnd('시작');
//   });


// async await
console.log('시작');
async function order() {
  try{
    const result1 = await f_1();
    const result2 = await f_2(result1);
    const result3 = await f_3(result2);
    console.log(result3);
  } catch(e){
    console.log(e);
  }
  
  console.log('종료');
}
order();