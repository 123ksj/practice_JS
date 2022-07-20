// 1부터 10까지 로그
for(let i = 1; i <= 10; i++){
  console.log(i);
}

// while
let i = 0;

while(i < 10){
  console.log(i);
  i++;
}

// break
while(true){
  let answer = confirm('계속 할까요?');
  if(!answer){
    break;
  }
}

// continue
// 짝수만
for (let i = 0; i < 10; i++){
  if(i % 2){
    continue;
  }
  console.log(i);
}