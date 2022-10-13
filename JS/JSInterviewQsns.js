/* */
/* 1) what is Hoisting ?                   

Mozilla - Hoisting is a process whereby the interpreter appears to move the declaration of functions, variables or classes
to the top of their scope, prior to execution of the code. 

Namaste JavaScript ->  is a process in JS by which we can access the variables and functions even before initializing 
them, we can access it without any errors.

Namaste JavaScript (Alok Raj) -> Hoisting is a concept which enables us to extract values of variables and 
functions even before initialising/assigning value without getting error and this is happening due to the 
1st phase (memory creation phase) of the Execution Context.               */



// NOTE : Variable and class declarations are also hoisted, so they too can be referenced before they are declared. 
//Note that doing so can lead to unexpected errors, and is not generally recommended. 


//-----------------------------------------------------------------------------------------------------------------





////////////////////////////////////////////  Variable hoisting  ///////////////////////////////////////////////////

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




//-----------------------------------------------------------------------------------------------------------------



//////////////////////////////////////////////Temporal dead zone (TDZ) ////////////////////////////////////////////////

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


//-----------------------------------------------------------------------------------------------------------------


////////////////////////////////////////////// FUNCTION HOISTING ////////////////////////////////////////////////////

/*  

NOTE : By default, functions return undefined. To return any other value, 
the function must have a return statement that specifies the value to return.


- One of the advantages of hoisting is that it lets you use a function before you declare it in your code.


- FUNCTION DECLARATION is also known as FUNCTION STATEMENT

//////// FUNCTION DECLARATION AKA FUNCTION STATEMENT ////////

NOTE : According to ECMASCRIPT SPECIFICATION, a FUNCTION STATEMENT AKA FUNCTION DECLARATION should always have a Name.

// FUNCTION DECLARATION -- this is how we declare a function in JS */

//1) Namaste JavaScript
function a(){
    console.log("a called");
}

// 2) MDN
function calcRectArea(width, height) {
  return width * height;                    
}
console.log(calcRectArea(5, 6));      // expected output: 30



// 1)  FUNCTION DECLARATION HOISTING

// Function declarations in JavaScript are hoisted to the top of the enclosing function or global scope. 
// You can use the function before you declared it:

// MDN
hoisted();                       // logs "foo"

function hoisted() {
  console.log('foo');
}


// MDN
catName("Tiger");

function catName(name) {
  console.log(`My cat's name is ${name}`);     // The result of the code above is: "My cat's name is Tiger"
}

// NAMASTE JAVASCRIPT

getName ();

function getName () {
    console.log("NAMASTE Akshay");        // NAMASTE Akshay
}


// Note :  FUNCTION DECLARATIONS are HOISTED IN JS


// FUNCTION Expression -- this is how we declare a function Expression in JS

// 1) Namaste JavaScript
var z  = function () {
    console.log("z called");
}

// 2) // MDN
const getRectArea = function(width, height) {
    return width * height;
};
console.log(getRectArea(3, 4));                  //      expected output: 12


/////////////////////////// Anonymous function
// - Anonymous functions are used in a place where functions are used as values
//function () {

// }


/* A function expression is very similar to and has almost the same syntax as a function declaration 
(see function statement for details). The main difference between a function expression and a function declaration 
is the function name, which can be omitted in function expressions to create anonymous functions. see example below*/

var z = function () {
    console.log("z called");  // here we have an Anonymous function
}

z();


// Named Function Expression 

var p = function xyz () {
    console.log("b called");
}

// NOTE : Function expressions in JavaScript are not hoisted, unlike function declarations. 
// You can't use function expressions before you create them. (BECAUSE it is treated like a variable)




//-----------------------------------------------------------------------------------------------------------------


/* 3) what is the difference between a FUNCTION DECLARATION & a FUNCTION Expression  ?
- A function expression is very similar to and has almost the same syntax as a function declaration 
(see function statement for details). The main difference between a function expression and a function declaration 
is the function name, which can be omitted in function expressions to create anonymous functions.

NOTE : The main difference is Hoisting, FUNCTION DECLARATIONS are Hoisted whereas FUNCTION Expressions are not Hoisted.



/* 4) what is an IIFE ?
- When functions are used only once, a common pattern is an IIFE (Immediately Invoked Function Expression).
- IIFE are function expressions that are invoked as soon as the function is declared. */

//examples:

// 1)
(function () {
    console.log('Code runs!');             // output: Code runs
}) ();

//2)
!function () {
    console.log('Code runs!');            // output: Code runs
}();



//-----------------------------------------------------------------------------------------------------------------

////////////////////////////////////////////// CLASS HOISTING ////////////////////////////////////////////////////


/* 2) what is Class ?  
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

/* Classes defined using a class declaration are hoisted, which means that JavaScript has a reference to the class. 
However the class is not initialized by default, so any code that uses it before the line in which it is 
initialized is executed will throw a ReferenceError.












////////////////////////////////////////  GUESS THE OUTPUT     //////////////////////////////////////////////////////////

// 1) Named Function Expression 
var p = function xyz () {
    console.log("b called");
}
xyz();   // ReferenceError: xyz is not defined (here we are passig this function as a value, this xyz is not created 
//in the outer scope, so this xyz is, not a function inside this outer scope, in the global scope, but it is created
//as a local variable)


// 2)
var p = function xyz () {
    console.log(xyz);                 // [Function: xyz]
}
p();



// 3) Named Function Expression 
var p = function xyz () {
    console.log("b called");
}
p();                                  // b called


//4) 
console.log(getName);

function getName () {
    console.log("NAMASTE Akshay");        // [Function: getName]
}


//5) Arrow Function snippet

console.log(getName);   // undefined (here, getName behaves like a normal variable, so we get undefined)

var getName = () => {
    console.log("NAMASTE Akshay");
}

//6) Arrow Function snippet

getName();   // TypeError: getName is not a function (here, if we could see the above example, if we console the 
             // getName function, we are getting undefined, in this example we are calling the getName function,
             // so basically we are calling 'undefined', so we get an error saying not a function)

var getName = () => {
    console.log("NAMASTE Akshay");
}

//7) 
console.log(getName2);     // undefined

var getName2 = function () {
    console.log("hey");         
}

//8)

getName2();             // TypeError: getName2 is not a function

var getName2 = function () {
    console.log("hey");   
}
















































































