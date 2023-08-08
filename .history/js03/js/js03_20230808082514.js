//IIFE : 정의하자마자 즉시 실행되는 함수
(function prt(){
    console.log('prt!!!');
})(); //함수 즉시 실행

let fnprt=function(a,b){
    console.log(`test fnprt ${a}, ${b}`);
}
fnprt(10,20);

let fnprt2=()=>{`test prt ${a}, ${b}`};

((a,b)=>{
    console.log(`test prt ${a}, ${b}`);
})(10,20);