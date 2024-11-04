// 1. 묵시적 형변환 
// 자바스크립트 엔진이 알아서 형변환을 하는것
let  num = 10;
let str = "20";

const result = num + str;
console.log(result);

// 2. 명시적 형변환
// -> 프로그래머 내장함수 등을 이용해서 직접 형변환을 명시
// -> 문자형 -> 숫자

let str1 = "10";
let strToNum = Number(str1);

let str2 = "10개";
let strToNum2 = parseInt(str2);

console.log(strToNum2);

// 숫자 -> 문자

let num1 = 20;
let numToString = String(num1);

console.log(numToString + "입니다.")