// array
let days = ['mon', 'tue', 'wed'];

// days[1] = '화요일';

// console.log(days.length);

days.push('thu');
days.unshift('sun');
// console.log(days);

for(let index=0; index < days.length; index++){
  console.log(days[index]);
}

for(let day of days){
  console.log(day);
}
