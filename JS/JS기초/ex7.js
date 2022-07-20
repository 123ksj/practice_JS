// 함수 선언문

function showError(){
  alert('에러가 발생했습니다. 다시 시도해주세요.');
}

const result = showError();
console.log(result);    // undefined
showError();

// 매개변수가 있는 함수
let msg = `Hello`;    // 전역 변수 (global varable)
console.log('함수 호출 전');
console.log(msg);

function sayHello(name){
  if(name){
    msg += ', ' + name;
  }
  console.log('함수 내부');
  // 지역 변수 (local varable)
  console.log(msg);
}

sayHello('Mike');
console.log('함수 호출 후');
console.log(msg);

// 전역 변수와 지역 변수
let msg2 = 'Welcome';
console.log(msg2)

function sayHello2(name2){
  let msg2 = "Hello";
  console.log(msg2 + ' ' + name2);
}

sayHello2('Mike');
console.log(msg2);

//
let name3 = 'Mike';

function sayHello3(name3){
  console.log(name3);
}

sayHello3();
sayHello3('Jane');

// OR
function sayHello4(name4){
  let newName = name4 || 'friend';
  let msg3 = `Hello, ${newName}`;
  console.log(msg3);
}

sayHello4();
sayHello4('Jane');

// default value
function sayHello5(name5 = 'friend'){
  let msg4 = `Hello, ${name5}`;
  console.log(msg4);
}

sayHello5();
sayHello5('Jane');

// return 으로 값 반환
function add(num1, num2){
  return num1 + num2;
}

const result2 = add(2,3);
console.log(result2);

// 함수 표현식
let showError = function(){
  console.log('error');
}

showError();

// 화살표 함수
let showError = () => {
  console.log('error');
}

const sayHello6 = (name6) => {
  const msg5 = `Hello, ${name6}`;
  console.log(msg5)
};

const add2 = (num3, num4) => num1 + num2;
