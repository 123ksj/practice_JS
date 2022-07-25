const mike = {
  name : "Mike",
};

const tom = {
  name : "Tom",
};

function showThisName(){
  console.log(this.name);
}

showThisName();
showThisName.call(mike);
showThisName.call(tom);

function update(birthYear, occupation){
  this.birthYear = birthYear;
  this.occupation = occupation;
};

update.call(mike, 1999, 'singer');
console.log(mike);
update.call(tom, 2002, "teacher");
console.log(tom);

update.apply(mike, [1999, "singer"]);
console.log(mike);
update.apply(tom, [2002, "teacher"]);
console.log(tom);



const nums = [3, 10, 1, 6, 4];
// const minNum = Math.min(...nums);
// const maxNum = Math.max(...nums);

const minNum2 = Math.min.apply(null, nums);
// = Math.min.apply(null, [3, 10, 1, 6, 4])
const maxNum2 = Math.max.apply(null, nums);

const maxNum3 = Math.max.call(null, ...nums);
// = Math.max.apply(null, 3, 10, 1, 6, 4)

console.log(minNum2);
console.log(maxNum2);
console.log(maxNum3);



const mike2 = {
  name : "Mike",
};

function update2(birthYear, occupation){
  this.birthYear = birthYear;
  this.occupation = occupation;
}

const updateMike = update2.bind(mike2);

updateMike(1980, 'police');
console.log(mike2);


const user = {
  name : "Mike",
  showName : function(){
    console.log(`heelo, ${this.name}`);
  },
};

user.showName();

let fn = user.showName;

fn();
fn.call(user);
fn.apply(user);

let boundFn = fn.bind(user);
boundFn();