// 객체
const superman = {
  name : 'clark',
  age : 30,
}

// console.log(superman.name);
// console.log(superman['age']);

// superman.hairColor = 'black';
// superman['hobby'] = 'football';

// delete superman.age;
console.log(superman)

function makeObject(name, age){
  return {
    name,       // name : name,
    age,        // age : age,
    hobby : 'football'
  };
}

const Mike = makeObject('Mike', 30);
console.log(Mike);

console.log('age' in Mike);
console.log('birthDay' in Mike);

// 객체 in
function isAdult(user){
  if(!('age' in user) || user.age < 20){    // user에 age가 없거나 20살 미만이거나
    return false;
  } 
  return true;
}

const Mike2 = {
  name : "Mike",
  age : 30
};

const Jane = {
  name : "Jane"
};

console.log(isAdult(Mike2));
console.log(isAdult(Jane));

// 객체 for ... in
const Mike3 = {
  name : "Mike3",
  age : 30
};

for(key in Mike3){
  console.log(Mike3[key]);
}


// method
let boy = {
  name : 'Mike4',
  showName : function() {
    console.log(this.name)
  }
};

let man = boy;
boy = null;

man.showName();   

let boy2 = {
  name : 'Mike4',
  sayThis : () => {
    console.log(this);
  }
};

boy2.sayThis(); 