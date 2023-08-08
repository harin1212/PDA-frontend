//구조 분해 할당
//베열이나 객체 속성을 해체해서 개별 변수에 담는 것
let [a, b] = [10, 20];
console.log('a :', a);
console.log('b :', b);
console.log('-------------------------------')
let [t1, t2, ...t3] = [100, 200, 300, 400];
console.log(t1);
console.log(t2);
console.log(t3);

console.log('-------------------------------')
let [num1, num2] = [100, 200];
[su2, su1] = [su1, su2];
console.log(`su1:${su1}, su2:${su2}`);