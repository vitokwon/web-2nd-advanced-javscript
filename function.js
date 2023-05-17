// 1) 기본 함수
// 매개변수가 추가되니까 가장 마지막에 적용한 매개변수로 출력됨
// 문자열도 마지막 함수에 있는 것이 적용 됨.
// 매개변수 내용만 바껴서 각 함수별 출력됨.
function greetUser1() {
  console.log("1 Hi there!");
}
greetUser1();

// 2) 매개변수 추가, 호출 때 값전달
function greetUser2(userName) {
  console.log("2 Hi " + userName + "!");
}

greetUser2("Max");

// 3) 매개변수 추가, 값전달 안할 때 = undefined
// userName = undefined
function greetUser3(userName) {
  console.log("3 Hi " + userName + "!");
}

greetUser3();

// underfined : Represents "no value" (
// e.g used if a variable holds no value
// let age; // no value assigned
// console.log(age) // outputs 'undefined'

// null : Represents "no value"
// e.g Use "null" if you explicity want to set this as a value
// let age; // age should not be set
// console.log(age) // outputs 'null'

// 4) 매개변수 기본값 추가 > undefined
// userName = user
function greetUser4(userName = "user") {
  console.log("4 Hi " + userName + "!");
}

greetUser4();

// 5) 매개변수 기본값 추가 < 호출 때 전달한 값
// userName = Max , 기본값은 옵션(선택사항)임.
function greetUser5(userName = "user") {
  console.log("5 Hi " + userName + "!");
}

greetUser5("Max");

// 6) 두번째 매개변수 추가 시, 기본값이 있는 매개변수는 맨 뒤에 위치
// 기본값이 없는 매개변수의 값 전달은 필수 (undefined)
function greetUser6(greetingPrefix, userName = "user") {
    console.log(greetingPrefix + " " + userName + "!");
  }
  
  greetUser6("6 Hi", "Max"); // (필수, 옵션(기본값있음))
  greetUser6("6 Hello"); // (필수)
  
  