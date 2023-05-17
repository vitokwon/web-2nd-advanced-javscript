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