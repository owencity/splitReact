// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
    {name: "이정환" , hobby : "테니스"},
    {name: "이효빈" , hobby : "독서"},
    {name: "장나라" , hobby : "게임"},
];

const tennisPeople = arr1.filter(
    (item) => item.hobby === "테니스"
);

console.log(tennisPeople);

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환

let arr2 = [1, 2, 3];
arr2.map((item, idx, arr) => {
    console.log(idx, item)
    return item * 2;
})

let names = arr1.map((item) => item.name);
console.log(names);

// 3. sort 
// 배열을 사전순으로 정렬하는 메서드 -> 사전순이기떄문에 기본적으로 숫자는 대소관계는 불가 
let arr3 = ["b" , "a", "c"];
arr3.sort()

let arr4 = [10, 3 , 5];
arr3.sort((a, b) => {
    if(a > b) {
        // b가 a 앞에 와라
        return 1; // -> b, a 배치
        // 양수 리턴하면 둘중에 더작은값이 앞으로옴
    } else if(a < b) {
        // a가 b 앞에 와라
        return -1; // -> a, b 배치
    } else {
        // 같은값이면 바꾸지마라
        return 0; // -> a, b 자리를 그대로 배치
    }
});

// 4. toSorted 
// 원본배열을 정렬하는게 아니라 정렬된 새로운 배열을 반환하는 메서드


// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr6 = ["hi", "im" , "wintertown"];
const joined = arr6.join("-");
console.log(joined);
// , -> 구분자를 따로 인수로받아 바꿀수있음