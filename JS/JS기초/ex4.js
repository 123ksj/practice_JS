console.log(10 > 5);
console.log(10 == 5);   // 동등 연산자
console.log(10 != 5);

// 동등 연산자
const a = 1;
const b = "1";

console.log(a == b);
console.log(a === b);   // 일치 연산자

// if, else, else if
// 추가요구사항 : 
// 19살이면 수능 잘치세요 라는 문구를 보여주세요
const age = 19;

if (age > 19){
  console.log('환영 합니다.');
}
else if(age === 19){
  console.log('수능 잘치세요.');
}
else{
  console.log('안녕히 가세요.');
}


// switch문

// 사과 : 100원
// 바나나 : 200원
// 키위 : 300원
// 멜론 : 500원
// 수박 : 500원
// 사고 싶은 과일을 물어보고 가격 알려주기
let fruit = prompt('무슨 과일을 사고 싶나요?');

switch(fruit){
  case '사과':
    console.log('100원 입니다.');
    break;
  case '바나나':
    console.log('200원 입니다.');
    break;
  case '키위':
    console.log('300원 입니다.');
    break;
  case '멜론':
  case '수박':
    console.log('500원 입니다.');
    break;
  default:
    console.log('그런 과일은 없습니다.');
}