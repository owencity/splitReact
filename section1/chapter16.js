//1. 상수 객체
const animal = {
    type : "고양이",
    name : "나비",
    color : "black",
};

// 상수인 animal 다른 객체를 생성해서 할당하면 오류발생
// 아래는 가능

animal.age = 2; // 추가
animal.name = "까망이" // 수정
delete animal.color; // 삭제

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함

const person = {
    name : "이정환" ,
    // 메서드 선언(객체의 동작을 정의)
    sayHi() {
        console.log("안녕!");
    },
};

person.sayHi();
person["sayHi"]();

