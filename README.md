# 고급 자바 스크립트 개념 (섹션 22)

- 함수, 기본 매개 변수
- 나머지 매개변수(rest parameter), 스프레드 연산자 (spread operator)
- 함수가 객체인 이유
- 템플릿 리터럴
- 기본값과 참조값 (primitive value & reference value)
- 지정 오류 처리 ( try / catch )

## 함수

### 매개변수, 매개변수의 기본값, 전달값,

```javascript
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
```

### 나머지 매개변수 & 스프레드 연산자 (rest parameter & spread operator)

```javascript
// 1) NaN 값 출력
// NaN : Not a Number
// let result = 1 + undefined;
// console.log(result); // outputs NaN
function sumUp1(num1, num2, num3) {
  // num3 값을 받지 못해서 'undefined'
  return num1 + num2 + num3;
}

console.log(sumUp1(1, 2));

// 2) num3 = 0 기본값 설정, 3 출력.
function sumUp2(num1, num2, num3 = 0) {
  return num1 + num2 + num3;
}

console.log(sumUp2(1, 2));

// 3) 매개변수에 숫자배열 적용
// for문으로 출력 시, 합계 27 출력됨
function sumUp3(numbers) {
  let result = 0;

  for (const number of numbers) {
    result += number; // result = result + number
  }

  return result;
}
// 배열값으로 보냄
console.log(sumUp3([1, 5, 10, 11]));

// 4) 숫자배열 적용 안함 (함수에 따라 배열사용 안할 시)
// 매개변수 앞 '...' 추가 입력, JS에 의해 매개변수들이 배열로 병합.
// 합계 값 출력 : 78
// rest parameter
function sumUp4(...numbers) {
  let result = 0;

  for (const number of numbers) {
    result += number; // result = result + number
  }

  return result;
}
// 배열값이 아님
console.log(sumUp4(1, 5, 10, 11, 20, 31));

// 5) '...' rest parameter와 배열을 함꼐 사용했을 시
// 01,5,10,11,20,31 로 값 출력
// '...' 은 list 값을 원함.
function sumUp5(...numbers) {
  let result = 0;

  for (const number of numbers) {
    result += number; // result = result + number
  }

  return result;
}

// 배열로 다시 작성
const inputNumbers5 = [1, 5, 10, 11, 20, 31];
console.log(sumUp5(inputNumbers5));

// 6) '...' rest parameter와 배열을 함꼐 사용했을 시
// '...' 은 list 값을 원함.
// 호출 때 전달할 값에 '...' 을 추가하면 배열을 list로 보내게 됨.
// 합계 값 출력 : 78
// 스프레드 연산자 (spread operator)
function sumUp6(...numbers) {
  let result = 0;

  for (const number of numbers) {
    result += number; // result = result + number
  }

  return result;
}

// 배열로 다시 작성
const inputNumbers6 = [1, 5, 10, 11, 20, 31];
console.log(sumUp6(...inputNumbers6));
```

### 함수도 객체인 이유

```javascript
// 함수 = 객체

// 객체 작동 (key:value)
// dot notation으로 값 추가, 수정, 읽기 가능
const person = {
  name: "Max",
  age: 32,
};
person.name = "something"; // 수정
person.address = "German"; // 추가
console.log(person.name); // 출력1
console.log(person.address); // 출력2

// 함수 작동
function sumUp6(...numbers) {
  let result = 0;

  for (const number of numbers) {
    result += number;
  }

  return result;
}

const inputNumbers6 = [1, 5, 10, 11, 20, 31];
console.log(sumUp6(...inputNumbers6)); // 결과 값: 78

// 함수호출이 아니라 함수 참조를 가져옴
console.log(sumUp6); // 결과 : [function: sumUp6]

// 브라우저 개발도구에서 함수를 console.dir(sumUp6) 출력 시,
// key:value쌍의 객체와 같은 속성들 확인 가능
// const app = express(); // app 객체 생성하는 express 함수
// app.use(express.urlencoded(extended : false)); // express 함수의 속성에 접근
// 모든 함수 속성에 접근 가능함 sumUp.someProperty, 속성 추가도 가능. 다만 비효율
```

## 템플릿 리터럴

```JavaScript
// 템플릿 리터럴

// 1) `` 역따옴표 사용하여 자리바꿈 가능
function greetUser1(greetingPrefix, userName = "user") {
  console.log(`1 Hi

  there!`);
}

greetUser1();

// 2) ``역따옴표와 ${} 사용하여 + concatnate 없이 동적값 연결 가능
function greetUser2(greetingPrefix, userName = "user") {
  console.log(`${greetingPrefix} ${userName}!`);
}

greetUser2('2 Hi', 'Max');
greetUser2('2 Hi')
```

## 기본값과 참조값

```JavaScript
// 기본값(primitivee)과 참조값(reference)
// 각각 다른 종류의 컴퓨터 메모리에 저장됨.
// 객체의 불필요한 복사본(많은 공간 필요)을 만들지 않기 위함

// Primitive values(단순) : number, strings, booleans & more (undefined)
// 변수(또는 상수) 자체에 저장 됨, 스택(stack) 메모리
let a = 5;
let b = a;
b = 10;
console.log(a); // 출력 결과: 5
console.log(b); // 출력 결과: 10
// a와 b가 독릭적으로 값을 가지고 있는 별개의 원시값

// Reference values(복잡) : Objects (arrays, function)
// 객체(또는 배열)를 저장한 변수(또는 상수)는 값을 가리키는 포인터 역할,
// 객체(또는 배열)의 '주소값'이 변수(또는 상수)값으로 저장 됨, 힙(heap) 메모리
let obj1 = { name: "John" };
let obj2 = obj1;
obj2.name = "Jane";
console.log(obj1.name); // 출력 결과: "Jane"
console.log(obj2.name); // 출력 결과: "Jane"
// 'obj2.name'을 변경하면 'obj1.name'의 값도 함께 변경
// 두 변수가 동일한 객체를 가리키고(point) 있기 때문

// 1) const 상수 hobbies의 값 추가가 왜 가능했는지?
const hobbies = ["Sports", "Cooking"]; // 배열의 주소를 상수에 저장한 것.
const age = 32;
hobbies.push("Reading"); // 배열의 주소는 변하지 않음
// hobbies = ['Coding', 'Sleeping']; // not allowed! new address is stored!
// 상수값의 저장된 주소를 재정의 하는 것임.
console.log(hobbies);

// 2) 상수(또는 변수)에는 객체(또는 배열)의 주소를 가리킴.
const person2 = { age: 32 };
function getAdultYears2(p) {
  p.age -= 18;
  return p.age;
}
console.log(getAdultYears2(person2)); // 14 출력, 전달값 person의 주소.
console.log(person2); // { age: 14} 출력 됨, 왜 {age: 32}가 아닌가? 객체를 저장했기 때문에 주소를 가리킴(pointer)
//

// 3) 객체의 속성을 재정의 하지 않고 작업
const person3 = { age: 32 };
function getAdultYears3(p) {
  // p.age -= 18;
  // return p.age;
  return p.age - 18;
}
console.log(getAdultYears3(person3)); // 14 출력, 전달값 person의 주소.
console.log(person3); // { age: 32 } 출력.

// 4) 객체 자체의 값을 변경 (특정 함수 동작에 의해 필요할 때)
const person4 = { age: 32 };
function getAdultYears4(p) {
  p.age -= 18;
  return p.age;
}
// 새로운 별도의 주소에 새로운 객체 생성
console.log(getAdultYears4({ age: person4.age })); // 14 출력, 새로운 객체 생성
console.log(person4); // { age: 32 } 출력, 원래 객체 변경 없음

// 5) 스프레드 연산자 적용, 객체 복사
const person5 = { age: 32 };
function getAdultYears5(p) {
  p.age -= 18;
  return p.age;
}
// 객체의 key:value 값 목록 제공, 새 객체 생성
console.log(getAdultYears5({ ...person5 })); // 14 출력, 새 객체
console.log(person5); // { age: 32 } 출력, 기존 객체

```

## 사용자 지정 오류 처리 (try/catch)
  - 에러 발생 시, 모든 코드의 작동이 중단 (비효율)
  - try/catch문을 통해 에러가 발생해도 진행하도록 처리
  - 범위

```JavaScript
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
```

## 가변범위지정과 섀도잉
  - 가변범위지정: 특정 블록{}에서 사용될 변수의 범위를 사전 예측, 실행속도 향상,
  - 섀도잉 : 변수의 이름 충돌을 방지, 서로 다른 스코프의 동일한 이름 사용
```JavaScript
// 3) 범위 지정, 생성된 변수 또는 함수는 { } 안에서만 작동함
// 아래 문법을 써야 다른 파일에서 함수 사용 가능 (노드 JS만 해당)
module.exports = {
  readFile2: readFile2,
};

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
```