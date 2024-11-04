// function returnFalse() {
//     console.log("false 함수")
//     return false;
// }

// function returnTrue() {
//     console.log("True 함수")
//     return true;
// }

// console.log(returnFalse() && returnTrue());

// 단락평가 활용 사례

function printName(person) {
    const name = person && person.name;
    console.log(name || "person의 값이 없음");
}

printName();
printName({name : "이정환"});