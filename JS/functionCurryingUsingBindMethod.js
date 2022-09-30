functionCurryingUsingBindMethod

let multiply = function(x,y){
    console.log(x * y);
}

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(3);

let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(9);

let multiplyByFour = multiply.bind(this, 4);
multiplyByFour(7);

let multiplyByFive = multiply.bind(this, 5);
multiplyByFour(8);v
