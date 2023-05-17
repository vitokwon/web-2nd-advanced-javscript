// try/catch를 사용한 사용자 지정 오류 처리

// fs는 노드 기능이라서 nodejs에서만 작동, 브라우저에서는 작동안함
const fs = require("fs");

// 1) 오류 발생 시, 모든 작업 중단
function readFile1() {
  //   fs.readFileSync("data.json"); // 실제 data.json은 없어서 오류 발생
  //   console.log("Hi There!"); // 다음 단계 작업 진행 못함.
}
readFile1();

// 2) 오류 발생 시에도 작업 진행, try/catch
function readFile2() {
  try {
    fs.readFileSync("data.json"); // 실제 data.json은 없어서 오류 발생
  } catch {
    console.log("An error occurred!"); // 발생한 오류를 건너뛰고 코드 진행
  }
  console.log("Hi There!"); // 다음 단계 작업 진행
}
readFile2();

// 3) 범위 지정, 생성된 변수 또는 함수는 { } 안에서만 작동함 
// 아래 문법을 써야 다른 파일에서 함수 사용 가능 (노드 JS만 해당)
module.exports = {
  readFile2: readFile2
}

// 생성된 변수는 {} 안에서만 작동함
function readFile3() {
  let fileData3; // readFile3 {} 내에서 작동
  try {
    const fileData3 = fs.readFileSync("data.json"); // try{} 안에서만 작동
    fileData3 = fs.readFileSync("data.json"); // readFile3{}의 fileData3
    } catch {
    console.log(fileData3); // try{} fileData가 아님, readFile2함수 내에서 정의되어 있지 않음
    console.log("An error occurred!");
  }
  console.log("Hi There!"); // 다음 단계 작업 진행
}
readFile3();
