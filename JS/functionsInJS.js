// //Function Statement aka Function Declaration

// a();
// function a(){
//     console.log("a called");
// }


// //Function Expresions -> here we are using Anonymous function

// b(); 
// var b = function(){
//     console.log("b called");
// }


// //Anonymous Function - a function without a name -- these are used in a place where functions are used as values.
// //we can use anonymous functions and assign it/them to a variable

// function () {

// }


// Named Function Expressions - we don't use an Anonymous function here instead we use function with a name

// var b = function xyz() {
//     console.log("called");
// }
// b();



// // Difference between Function Parameters & Function Arguments

// var b = function xyz(Param1, Param2) {
//     console.log(" b called");
// }
// b(Arg1,Arg2);

// // First Class Functions (First Class Citizens) - the ability to use functions as values (assigning to a variable) is what is called First class Functions (the aility to -> functions can be passed as arguments inside another function, functions can be returned from another function)

// // callBack Functions 

// function x(){

// }
// x(function y(){   // here function 'y' is known as callBack Function -> this function 'y' is called back sometime later 
//                   // in the program that is why it is known as callBack Function.
// })



//  Async TASKS using CallBack Functions 

setTimeout(function (){   //-> the setTimeout function here is taking a callBack Function 
    console.log("Timer"); // -> the first parameter inside setTimeout function is a callBack Function which is,
}, 5000);                 // -> passed into setTimeout function which is called back sometime later in the code,
                          // -> after certain amount of time which we pass as 2nd arg.

function x(y){
    console.log("x");     // -> so the setTimeout Asynchronous operation was not possible without these callBack Functions. 
    y();
}
x(function(y){
    console.log("y");
});
















