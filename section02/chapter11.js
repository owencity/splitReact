console.log(1);

setTimeout(() => (
    console.log(2)
), 3000); // 비동기로 만들어주는 설정

// 비동기 작업들은 자바스크립트 엔진이아닌 Web APIS 브라우저에서 관리하는 별도의 영역에서 관리
// 비동기함수들은 Web APIs로 들어감 

console.log(3);


