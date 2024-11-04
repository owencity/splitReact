// 1. 객체 생성
let obj1 = new Object (); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)


// 2. 객체 프로퍼티 (객체 속성)
let person = {
    // key(문자열,숫자만 가능, 띄어쓰기는 "" 로 감싸주어야한다) : value
    name : "이정환" ,
    age : 27,
    hobby : "테니스",
};

// 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근( 점 표기법, 괄호 표기법)
let name = person.name;

let age = person["age"]; 
// "" 없이 넣으면 key가아닌 변수로 인식

let property = "hobby";
let hobby = person[property];
console.log(hobby);

// 3.1 새로운 프로퍼티 추가
person.job  = "fe developer";
person["favoriteFood"] = "떡볶이";

// 3.3 프로퍼티 수정
person.job = "educator";
person["favoriteFood"] = "초콜릿";
console.log(person);

// 3.4 프로퍼티 삭제
delete person.job;
delete person["favoriteFood"]
console.log(person);

// 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)

let result = "name" in person;
console.log(result);
