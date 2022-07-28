let curPos = 0;   // 현재 보여주는 이미지의 인덱스 번호
let position = 0;    // 이미지 태그의 위치 값 지정할 변수
const IMAGE_WIDTH = 600;

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const images = document.querySelector(".images");

function prev(){
  if(curPos > 0){
    nextBtn.removeAttribute("disabled");
    position += IMAGE_WIDTH;
    images.style.transform = `translateX(${position}px)`;
    curPos -= 1;
  }
  if(curPos === 0){
    prevBtn.setAttribute('disabled', 'true');
  }
}

function next(){
  if(curPos < 3){
    prevBtn.removeAttribute('disabled');
    position -= IMAGE_WIDTH;
    images.style.transform = `translateX(${position}px)`;
    curPos += 1;
  }
  if(curPos === 3){
    nextBtn.setAttribute('disabled', 'true');
  }
}

function init(){
  prevBtn.setAttribute("disabled", 'true');
  prevBtn.addEventListener("click", prev);  
  nextBtn.addEventListener("click", next);    // nextBtn을 클릭했을 때 next 함수가 실행될 것이다.
}

init();