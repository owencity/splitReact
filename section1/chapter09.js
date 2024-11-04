// 1. if 조건문
let num = 10;

if(num >= 10) {
    console.log("num은 10 이상입니다.")
}
else if (num >= 5) {
    console.log("num은 5 이상입니다.")
}
else {
    console.log("조건이 거짓입니다.")
}

// if 로 시작해서 else 가 없이 끝내거나 else 로 끝내야한다.

// 2. Switch 문
// -> if 문과는 동일
// 다수의 조건을 처리할 때 if보다 더 직관적이다.

let animal = "cat";

switch (animal) {
    case "cat" : {
        console.log("고양이")
        break;
    }
       
    case "dog" : {
        console.log("강아지");
    }
    case "snake" :{
        console.log("뱜");
    }
    case "tiger" :{
        console.log("호랑이");
    }
}