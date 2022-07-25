const car = {
  wheels : 4,
  drive() {
    console.log('drive..');
  },
};

const bmw = {
  color : 'red',
  navigation : 1,
};

const benz = {
  color : 'black',
};

const audi = {
  color : 'blue',
};

bmw.__proto__ = car;
benz.__proto__ = car;
audi.__proto__ = car;

const x5 = {
  color : 'white',
  name : 'x5',
};

x5.__proto__ = bmw;


/** **/


// const car2 = {
//   wheels : 4,
//   drive() {
//     console.log('drive..');
//   },
// };

const Bmw = function (color) {
  this.color = color;
};

Bmw.prototype.wheels = 4;
Bmw.prototype.drive = function(){
  console.log('drive..');
};
Bmw.prototype.navigation = 1;
Bmw.prototype.stop = function(){
  console.log("STOP!");
};

// Bmw.prototype = {
//   constructor : Bmw,
//   wheels : 4,
//   drive (){
//     console.log('drive..');
//   },
//   navigation : 1,
//   stop(){
//     console.log("STOP!");
//   },
// };

const x5 = new Bmw('red');
const z4 = new Bmw('blue');

// x5.__proto__ = car2;
// z4.__proto__ = car2;


const Bmw2 = function(color) {
  const c = color;
  this.getColor = function(){
    console.log(c);
  };
};

const x6 = new Bmw2('red');