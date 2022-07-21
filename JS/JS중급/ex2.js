let n = "name";
let a = "age";

const user1 = {
  [n] : "Mike",
  [a] : 30,
  [1+4] : 5,
};

console.log(user);


function makeObj(key, val){
  return {
    [key] : val
  }
}

const obj = makeObj("나이", 33);

console.log(obj);


const user2 = {
  name : "Mike",
  age : 30,
};

const user3 = Object.assign({}, user2);
console.log(user3);

const result1 = Object.keys(user2);
console.log(result1);

const result2 = Object.values(user2);
console.log(result2);

const result3 = Object.entries(user2);
console.log(result3);

