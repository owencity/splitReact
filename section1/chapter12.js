

function funcA() {
    // console.log("funcA")
}

let varA = funcA; // 함수를 변수에 담을수있음.
varA();

// 1. 함수표현식 -> 호이스팅이 대상이되지않음.

let varB = function () { // 익명함수, 생략해도 가능
    // console.log("funcB");
}
// 함수호출불가, 변수로 호출
varB();

// 2. 화살표 함수

let varC = (value) => {
    console.log(value);
    return value + 1;
}
// 하나의 값을 반환하는경우 {}, return 생략가능

console.log(varC(10));