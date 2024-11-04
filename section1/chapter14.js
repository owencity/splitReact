// 스코프
// -> 전역(전체 영역) 스코프 / 지역스코프로 나늼
// -> 전역 스코프 : 전체 영역에서 접근 가능
// -> 지역 스코프 : 특정 영역에서 접근 가능

let a = 1; // 전역스코프

function funcA() {

    function funcB() {} // 함수안에서만 지역스코프를 갖는다.
    let b = 2; // 지역스코프
    console.log(a)
}

funcA();

if (true) {
    let c = 1;
    function funcB () {} // 조건문에서는 함수는 지역스코프 갖지않음
}

for( i = 0; i < 5; i++) {
    function funcB () {} // 반복문에서는 함수는 지역스코프 갖지않음
}