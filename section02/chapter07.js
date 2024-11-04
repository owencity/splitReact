// 6가지의 요소 조작 메서드

// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1,2,3];
arr1.push(4, 5, 6, 7);
// 추가후 변환된 길이를 반환 함

// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하고, 반환
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop();

// 3.shift
// 배열의 맨 앞에 있는 요소를 제거, 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();


// 4.unshift
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드
let arr4 = [1, 2, 3];
arr4.unshift(0);
// 추가한후 변경된 배열의 길이 반환

// shift , unshift는 제거하거나 추가할때 인덱스를 밀거나 당겨야 하므로 pop,push 보다 느리며
// 되도록 push 나 pop를 통해 해결하는게 좋다


// 5. slice
// 마치 가위처럼, 배열의 특정 범위를 잘라내서 새로운 배열로 반환

let arr5 = [1, 2, 3, 4, 5];
arr5.slice(2,5); // 2~4번 index 까지, 파이썬 range 나빼고랑 똒같음, 뒤에 인수값 안주면 끝까지 인것도 똒같음
arr5.slice(-1); // 맨뒤끝 인덱스 -1
// 자르더라도 원본배열은 바뀌지않는다. 

// 6. concat 
// 두개의 서로 다른 배열을 이어붙여서 새로운 배열을 반환

let arr6 = [1, 2];
let arr7 = [3, 4];

let concatedArr = arr6.concat(arr7);
console.log(concatedArr)