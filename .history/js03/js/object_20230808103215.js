//function에 대한 생성자 함수
const op = new Function("a", "b", "return a+b");

let result = op(10,20);
console.log('result',result);