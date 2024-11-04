// 함수 선언 

function greeting() {
    console.log("안녕하세요");
}

console.log("호출 전");
greeting();
console.log("호출 후");

function getArea(width, height) { // 매개변수
    function another() { // 중첩함수
       console.log("another");
    }
    another();
    let area = width * height;
    return area; 
}

let area1 = getArea(10, 20);  // 인수 
console.log(area1);

// 자바스크립트만의 호이스팅이있음 -> 끌어올리다.
// 유연하게 함수의 위치를 신경을 쓰지않아도된다.
