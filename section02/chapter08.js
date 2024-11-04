// 5가지 요소 순회 및 탐색 메서드
// 1. foreach
// 모든 요소를 순회하면서 , 각각의 요소에 특정 동작을 수행시키는 메서드

let arr1 = [1, 2, 3];

arr1.forEach(function (item , idx, arr) {
    // console.log(idx , item * 2);
})

let doubledArr = [];

arr1.forEach((item) => {
    doubledArr.push(item * 2);
})

console.log(doubledArr);

// 2. includes 
// 배열에 특정 요소가 있는지 확인하는 그런 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3);

console.log(isInclude);

// 3.index of (기본적으로 얕은비교(===)로 동작, 객체 index 확인불가)
// 특정 요소의 인덱스(위치)를 반환하는 메서드
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2);
console.log(index);

// 존재하지않으면 -1 반환

// 4. findindex (콜백함수를 이용 특정 프로퍼티값을 비교시킬수 있음)
// 모든 요소를 순회하면서, 콜백함수를 만족하는 
// 특정 요소의 인덱스(위치)를 반환하는 메서드

// let arr = [1, 2, 3];
// arr.findIndex(() => {
//     if(item === 2) return true;
// })

//배열을 순회하며 T,F를 반환하는 콜백함수 필요, 해당 true 값이되는 값의 index를 반환


// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환


let arr5 = [ 
     {name : "홍길동"},
     {name : "이정환"},
];

const finded = arr5.find(
    (item) => item.name === "이정환"
);

console.log(finded);
