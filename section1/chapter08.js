// 1. null 병합 연산자
// -> 존재한 값을 추려내는 기능
// -> null, undefined 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2; // ?? -> null 병합 연산자
let var5 = var1 ?? var3; 
console.log(var5)
let var6 = var2 ?? var3;

let userName = "이정환";
let userNickName = "Winterload";

let displayName = userName ?? userNickName;
console.log(displayName);

// typeof 연산자
// 값의 타입을 문자열로 반환하는 기능을 하는 연산자

let var7 = 1;
var7 = "hello";

let t1 = typeof var7; // 뒤에나오는 변수나 값을 문자열로 반환
console.log(var7)

// 삼항 연산자 
let var8 = 10;

// 요구사항 변수 res에 var8 값이 짞이라면 짞을 저장하고 홀수라면 홀을 저장해라
let res = var8 % 2 === 0 ? "짝수" : "홀수";
console.log(res);
