// 생성자 함수
function User(name, age){   // 첫 글자는 대문자로
  this.name = name;
  this.age = age;

  this.sayName = function(){
    console.log(this.name);
  }
}

// new 연산자를 사용해서 호출
let user1 = new User('Mike', 30);
let user2 = new User('Jane', 22);
let user3 = new User('Tom', 17);

let user4 = new User('Han', 40);
user4.sayName();    // 'Han'



// 상품 객체를 생성해보자
function Item(title, price) {
  // this = {};
  this.title = title;
  this.price = price;
  this.showPrice = function(){
    console.log(`가격은 ${price}원 입니다.`);
  }

  // return this;
}

const item1 = new Item('인형', 3000);
const item2 = new Item('가방', 4000);
const item3 = new Item('지갑', 9000);

console.log(item1, item2, item3);

item3.showPrice();