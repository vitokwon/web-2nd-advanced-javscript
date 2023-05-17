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
