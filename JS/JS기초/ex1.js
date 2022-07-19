const name = "Mike";

// 문자열은 3가지 방식으로 작성 가능
const name1 = "Mike";
const name2 = 'Mike';
const name3 = `Mike`;

const message = "I'm a boy.";
const message2 = 'I\'m a boy.';

const messgae3 = `My name is ${name}`;

const message4 = `나는 ${30+1}살 입니다.`;

// 숫자형
const age = 30;
const PI = 3.14;

const x = 2/0;    // Infinity

const y = name/2;   // NaN = Not a number

// Boolean
const a = true;
const b = false;

// null 과 undefined
let age1;   // undefined

let user = null;

// typeof 연산자
console.log(typeof 3);            // number
console.log(typeof name);         // string
console.log(typeof true);         // boolean
console.log(typeof "xxx");        // string
console.log(typeof null);         // object
console.log(typeof undefined);    // undefined