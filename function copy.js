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
const inputNumbers5 = [1, 5, 10, 11, 20, 31]
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
const inputNumbers6 = [1, 5, 10, 11, 20, 31]
console.log(sumUp6(...inputNumbers6));
