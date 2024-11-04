// 1. 배열의 구조 할당
let arr = [1,2,3];

let [one, two, three , four = 4] = arr;


// 2. 객체의 구조분해 할당
let person = {
    name : "이정환",
    age : 27,
    hobby : "테니스",
};

let {name , 
    age : myAge , // age -> myAge 로 변수명변경
    hobby,
    extra = "hello", 
} = person;

// 객체는 배열과 다르게 { } 중괄호를 이용한다 


// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법

const func = ({name , age, hobby, extra}) => {
    console.log(name, age , hobby, extra)
}

func(person)