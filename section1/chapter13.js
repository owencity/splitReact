// 1. 콜백함수
function main(value) {
    console.log(1);
   value();
   console.log("end");
}

main(() => {
    // console.log("i am sub");
});

// 2. 콜백함수의 활용
// function repeat(count) {
//     for (let idx = 1; idx <= count; idx++) {
//         console.log(idx);
//     }
// }

// function repeatDouble(count) {
//     for (let idx = 1; idx <= count; idx++) {
//         console.log(idx * 2);
//     }
// }

function repeat(count, callback) {
    for (let idx = 1; idx <= count; idx++) {
        callback(idx);
    }
}

repeat(5, (idx) => {
    console.log(idx);
});

repeat(5, (idx) => {
    console.log(idx * 2);
});