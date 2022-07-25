console.clear();

// ES2021

// String.replaceAll
const str1 = "Hello World";
console.log(str1.replaceAll("l", "~"));

// Promise.any
const rejPromise = new Promise((res, rej) => {
  setTimeout(() => {
    rej("fail..")
  }, 1000);
})

const resPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("success")
  }, 2000);
})

Promise.race([rejPromise, resPromise])
  .then(() => console.log('성공'))
  .catch(e => console.log(e));

Promise.any([rejPromise, resPromise])
  .then(() => console.log('성공'))
  .catch(e => console.log(e));

// Numeric separators
let billion = 1_000_000_000   // 10억

// WeakRef = weak reference
// 약한 참조 = 가비지 컬렉터 대상
let user = {name : 'Mike', age : 30}
const weakUser = new WeakRef(user);

user = null;

const timer = setInterval(() => {
  const wUser = weakUser.deref();
  if(wUser){
    console.log(wUser.name);
  } else{
    console.log('제거 되었습니다.');
    clearInterval(timer)
  }
}, 1000)