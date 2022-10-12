/* */
/* 1) what is Hoisting ?                   

Mozilla - Hoisting is a process whereby the interpreter appears to move the declaration of functions, variables or classes
to the top of their scope, prior to execution of the code. 

Namaste JavaScript ->  is a process in JS by which we can access the variables and functions even before initializing 
them, we can access it without any errors.

Namaste JavaScript (Alok Raj) -> Hoisting is a concept which enables us to extract values of variables and 
functions even before initialising/assigning value without getting error and this is happening due to the 
1st phase (memory creation phase) of the Execution Context.               */





///////////////////// FUNCTION HOISTING /////////////////////  

//- One of the advantages of hoisting is that it lets you use a function before you declare it in your code.

catName("Tiger");

function catName(name) {
  console.log(`My cat's name is ${name}`);     // The result of the code above is: "My cat's name is Tiger"
}


/* Variable and class declarations are also hoisted, so they too can be referenced before they are declared. 
Note that doing so can lead to unexpected errors, and is not generally recommended. */




///////////////////// Variable hoisting /////////////////////

// -  Hoisting works with variables too, so you can use a variable in code before it is declared and/or initialized.

/* 1) Var Variable hoisting 
- The default initialization of the var is undefined.*/

console.log(num); // Returns 'undefined' from hoisted var declaration
var num = 6; // Initialization


/* 2) let and const hoisting

- Variables declared with let and const are also hoisted but, unlike var, are not initialized with a default value.
An exception will be thrown if a variable declared with let or const is read before it is initialized. */


console.log(num); // Throws ReferenceError exception (ReferenceError: num is not defined) as the variable value is uninitialized
let num = 6; // Initialization

console.log(num); 
const num = 6;   // ReferenceError: num is not defined



///////////////////// Temporal dead zone (TDZ) /////////////////////////////////

/* A let or const variable is said to be in a "temporal dead zone" (TDZ) from the start of the block until the
code execution reaches the line where the variable is declared and initialized. While inside the TDZ, the variable 
has not been initialized with a value, and any attempt to access it will result in a ReferenceError. 


The term "temporal" is used because the zone depends on the order of execution (time) rather than the order in which 
the code is written (position). For example, the code below works because, even though the function that uses the 
let variable appears before the variable is declared, the function is called outside the TDZ. */


// TDZ starts at beginning of scope
const func = () => console.log(letVar); // OK

// Within the TDZ letVar access throws `ReferenceError`

let letVar = 3; // End of TDZ (for letVar)
func(); // Called outside TDZ!                                // output - 3


// 1)
const b = function () {
    const a = 3;
    console.log(a);
}

b();          // output - 3

// 2)

let c = function () {
    let a = 3;
    console.log(a);
}

c();         // output - 3

// 3)

const d = function () {
    let a = 3;
    console.log(a);
}

d();        // output - 3

// 4)

let e = function () {
    const a = 3;
    console.log(a);
}

e();       // output - 3


///////////////////// FUNCTION HOISTING /////////////////////  

/*  

- 1) FUNCTION DECLARATION HOISTING

FUNCTION DECLARATION is also known as FUNCTION STATEMENT */

// FUNCTION DECLARATION AKA FUNCTION STATEMENT -- this is how we declare a function in JS.
// 1) Namaste JavaScript

function a(){
    console.log("a called");
}

// 2)
function calcRectArea(width, height) {
  return width * height;                    
}

console.log(calcRectArea(5, 6));
// expected output: 30































/* 2) what is Classes ?  
- Classes are a template for creating objects.

// Defining Classes
Classes are in fact "special functions", and just as you can define function expressions and function declarations, 
the class syntax has two components: class expressions and class declarations.

// Class declarations
One way to define a class is using a class declaration. To declare a class, you use the class keyword with the 
name of the class ("Rectangle" here). */

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}





















































































































