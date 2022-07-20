// OR
// 이름이 TOM 이거나, 성인이면 통과
const name = "Mike";
const age = 30;

if(name === 'Tom' || age > 19){
  console.log('통과');
}

// AND
// 이름이 Mike이고, 성인이면 통과
const name2 = "Mike";
const age2 = 30;

if(name2 === 'Mike' && age2 > 19){
  console.log('통과');
} else{
  console.log('돌아가.');
}

// NOT
// 나이를 입력받아 성인 아니면 돌아가라고..
const age3 = prompt('나이가..?');
const isAdult = age3 > 19;

if(!isAdult){
  console.log('돌아가..');
}

// 우선순위
// 남자이고, 이름이 Mike이거나 성인이면 통과
const gender = 'F';
const name4 = 'Jane';
const isAdult2 = true;

// if(gender === 'M' && name4 === 'Mike' || isAdult2)
if((gender === 'M' && name4 === 'Mike') || isAdult2){
  console.log('통과');
} else{
  console.log('돌아가.');
}

if(gender === 'M' && (name4 === 'Mike' || isAdult2)){
  console.log('통과');
} else{
  console.log('돌아가.');
}
