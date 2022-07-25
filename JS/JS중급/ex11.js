// const User = function (name, age){
//   this.name = name;
//   this.age = age;
//   // this.showName = function(){
//   //   console.log(this.name);
//   // };
// };

// User.prototype.showName = function(){
//   console.log(this.name);
// };

// const mike = new User('Mike', 30);

// class User2 {
//   constructor(name, age){
//     this.name = name;
//     this.age = age;
//   }
//   showName(){
//     console.log(this.name);
//   };
// }

// const tom = new User2('Tom', 19)


// /**/

// // extends
// class Car {
//   constructor(color){
//     this.color = color;
//     this.wheels = 4;
//   }
//   drive(){
//     console.log('drive..');
//   }
//   stop(){
//     console.log('STOP!');
//   }
// }

// class Bmw extends Car {
//   park(){
//     console.log("PARK");
//   }
// }

// const z4 = new Bmw('blue');


// /**/

// // 메소드 오버라이딩 (method overriding)

// class Car {
//   constructor(color){
//     this.color = color;
//     this.wheels = 4;
//   }
//   drive(){
//     console.log('drive..');
//   }
//   stop(){
//     console.log('STOP!');
//   }
// }

// class Bmw extends Car {
//   park(){
//     console.log("PARK");
//   }
//   stop(){
//     super.stop();
//     console.log('OFF');
//   }
// }

// const z4 = new Bmw('blue');


/**/

// 오버라이딩 (overriding)

class Car {
  constructor(color){
    this.color = color;
    this.wheels = 4;
  }
  drive(){
    console.log('drive..');
  }
  stop(){
    console.log('STOP!');
  }
}

class Bmw extends Car {
  constructor(color){
    super(color);
    this.navigation = 1;
  }
  park(){
    console.log("PARK");
  }
}

// const z4 = new Bmw('blue');
