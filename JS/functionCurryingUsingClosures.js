//functionCurryingUsingClosures

let multiply = function(x,y){
    console.log(x * y);
}


let multiply = function(x){
    return function(y){
        console.log(x*y);
    }
}

let multiplyBytwo = multiply(2);
multiplyBytwo(3);

let multiplyByThree = multiply(3);
multiplyByThree(10);