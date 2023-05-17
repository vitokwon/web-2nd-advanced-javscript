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