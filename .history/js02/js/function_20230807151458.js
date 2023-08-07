function move1(){
    console.log('move1-1');
    console.log('move1-2');
}
move1(); //함수 호출
console.log('------------------');

function move2(name, age){
    console.log(`name: ${name}, age: ${age}`);
    console.log('움직입니다!!');
}
move2('hong',20);
console.log('------------------');

function getData(){
    return 100;
}

let num = getData();
console.log('값은:'+num);