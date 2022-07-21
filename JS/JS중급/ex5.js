// forEach
let arr = ['Mike', 'Tom', 'Jane'];

arr.forEach((name, index) => {
  console.log(`${index + 1}. ${name}`);
});

// find / findIndex
let arr2 = [1, 2, 3, 4, 5];

const result = arr2.find((item) => {
  return item % 2 === 0;
});
console.log(result);


const result4 = arr2.filter((item) => {
  return item % 2 === 0;
});
console.log(result4);



let userList = [
  { name : "Mike", age : 30},
  { name : "Jane", age : 27},
  { name : "Tom", age : 10},
];

const result2 = userList.find((user) => {
  if(user.age < 19){
    return true;
  }
  return false;
});
console.log(result2);


const result3 = userList.findIndex((user) => {
  if(user.age < 19){
    return true;
  }
  return false;
});
console.log(result3);


// arr.map()
let userList2 = [
  { name : "Mike", age : 30},
  { name : "Jane", age : 27},
  { name : "Tom", age : 10},
];

let newUserList = userList2.map((user, index) => {
  return Object.assign({}, user, {
    id : index + 1,
    isAdult : user.age > 19
  });
});

console.log(newUserList);
console.log(userList2)


// join, split
let arr3 = ["안녕", "나는", "철수야"];

let result5 = arr3.join(' ');
console.log(result5);

let users = "Mike,Jane,Tom,Jony";

const result6 =  users.split(",");
console.log(result6);


// Array.isArray()
let user = {
  name : "Mike",
  age : 30,
};

let userList3 = ["Mike", "Tom", "Jane"];

console.log(typeof user);
console.log(typeof userList3);

console.log(Array.isArray(user));
console.log(Array.isArray(userList3));


/*
arr.sort()
배열 재정렬
주의! 배열 자체가 변경됨
인수로 정렬 로직을 담은 함수를 받음
*/
let arr4 = [1, 5, 4, 2, 3];
let arr5 = ['a', 'c', 'd', 'e', 'b'];
let arr6 = [27, 8, 5, 13];

arr4.sort();
arr5.sort();
arr6.sort((a,b) => {
  console.log(a,b);
  return a - b;
});
// 8, 27, 5, 13
// 5, 8, 27, 13
// 5, 8, 13. 27

console.log(arr4);
console.log(arr5);
console.log(arr6);


/*
arr.reduce()
인수로 함수를 받음
(누적 계산값, 현재값) => { return 계산값 };
*/

// 배열의 모든 수 합치기
let arr7 = [1, 2, 3, 4, 5];

// for, for of, forEach
let result7 = 0;
arr7.forEach((num) => {
  result7 += num;
});
console.log(result7);


// arr.reduce()
const result8 = arr7.reduce((prev, cur) => {
  return prev + cur;
}, 0);
console.log(result8);


let userList4 = [
  { name : "Mike", age : 30},
  { name : "Jane", age : 27},
  { name : "Tom", age : 10},
  { name : "Sue", age : 26},
  { name : "Harry", age : 42},
  { name : "Steve", age: 60},
];

let result9 = userList4.reduce((prev, cur)=>{
  if(cur.age > 19){
    prev.push(cur.name);
  }
  return prev;
}, [])

console.log(result9);