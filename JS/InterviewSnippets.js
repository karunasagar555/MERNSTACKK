// 1 ) Guess the output of the question

// var hero = {
//     _name : 'John Doe',
//     getSecretIdentity : function (){
//        return this._name;
//     }
// }

// var stoleSecretIdentity = hero.getSecretIdentity;
// stoleSecretIdentity();
// console.log(hero.getSecretIdentity);
// console.log(stoleSecretIdentity());


// 2) // Guess the output of the question

// const person = {
//     name : "karun",
//     walk (){
//         console.log(this);
//     }
// }

// // person.walk();       -- will return reference to an object
// const walk = person.walk;  
// console.log(walk());   // -- calling it standalone will return window object, undefined in React due to strict mode

// 3) // Guess the output of the question

// const person = {
//     talk (){
//         var self = this
//         setTimeout( () => {
//             console.log(self);
//         })
//     }
// }

// person.talk();


// 4) // Guess the output of the question

// const person = {
//     talk (){
//         setTimeout(function () {
//             console.log(this);  --> this return window object 
//         })
//     }
// }

// person.talk();

// // 5) // Guess the output of the question

// const colors = ['red', 'green','pink']
// const items = colors.map(function(color){
//     return '<li>' + color + '</li>';
// });

// console.log(items);


//6) Guess the output of the question

// const colors = ['red', 'green','pink']
// const items = colors.map(color => '<li>' + color + '</li>');
// console.log(items);

// //7)

// // const colors = ['red', 'green','black']
// // const items = colors.map(color =>  `<li>${color}</li>`);
// // console.log(items);

// //8)

// const address = {
//     street : "",
//     City :"",
//     Country: "",
// };

// // const street = address.street;
// // const City = address.City;      -- what is the problem with this code ?? --> Repetitive Stuff, isn't it ?
// // const Country = address.Country;

// // so now Object Destructuring solves this problem, so we can replace the above three lines of code with this below single line of code. 

// const {street, City, Country} = address;


// Spread Operator using arrays 

// const first = [1,2,3];
// const second = [4,5,6];

// const combine = first.concat(second); // if we wanna combine both the arrays-> however this is an old method

// // here comes the new method which is Spread Operator

// const combined = [...first, ...second]; //Now why is this preferred over the former (above) one, let's see in the below lines.
// //console.log(combined); // [ 1, 2, 3, 4, 5, 6 ]

// const combinedd = [...first, 'a', ...second, 'end']; // this is preferred because we can add extra elements but in the former one our code would end up looking more complicated.
// console.log(combinedd); // [1, 2, 3, 'a', 4, 5, 6,'end']


// cloning of the array using spread operator 

// const first = [1,2,3];
// const clone = [...first];
// console.log(first);        //-- [ 1, 2, 3 ]
// console.log(clone);       //-- [ 1, 2, 3 ]




// Spread Operator using Objects 

// const first = { name : 'karun'};
// const second = { job : "Developer"};

// const combine = {...first, ...second};
// console.log(combine);   // { name: 'karun', job: 'Developer' }

// const setCombine = {...first, ...second, Location : 'Bangalore'};
// console.log(setCombine);   // { name: 'karun', job: 'Developer', Location: 'Bangalore' }

// cloning of the object using spread operator 

// const first = { name : 'karun'};
// const clone = {...first};
// console.log(first);
// console.log(clone);


// let a = 1;

// console.log('singh' == 1);


// 9) // Guess the output of the question

// let number = 10;
// function increase(number){
//     number++;
// }

// increase(number);
// console.log(number);    // Primitive Types are copied by values.

// 10) // Guess the output of the question

// let obj = {Value : 10};
// function increase(obj){
//     obj.Value++;
// }

// increase(obj);
// console.log(obj);             // Reference Types are copied by References.


// 10) // Guess the output of the question

// let x = 10;
// let y = x;
// x = 20;
// console.log(x,y);   // Primitive Types are copied by values, here both x & y are independent variables.


// 11) // Guess the output of the question
// let x = {value : 10}; // here this object : {value : 10} is not stored in x, it is stored somewhere else in memory
//                       // and the address of that memory location is stored inside the x. 
// let y = x;            // so when we copy x to y, it is the address or the reference that is copied.
// x.value = 20;         // so both x & y are pointing to the same object in the memory.
// console.log(x,y);   // Reference Types are copied by References.here both x & y are pointing to the same 

//12) // Guess the output of the question

// let address = {
//     city : 'a',
//     street :'b',
//     zip : 'c'
// };

// function showAddress(address){
//     for (let key in address)
//         console.log(key, address[key]);
// }

// showAddress(address);


//13) // Guess the output of the question

// let address1 = 'x';
// let address2 = 'y';
// let address3 = address1;


    

// function areSame(address1, address3){
//     return address1 === address3;
// }

// console.log(areSame(address1, address3))

// 14) // Guess the output of the question

// const sing = "I am a disco dancer"
// console.log(sing.slice(0,3));

// 15) // Guess the output of the question

// const first = [1,2,3];
// const second = [4,5,6];

// const combined = [...first, 'a', ...second, 'b'];

// const copy = [...combined]

// console.log(copy);

//16) // Guess the output of the question

// const numbers = [1,2,3];
// const res = numbers.reverse();
// console.log(res);

// //17) // Guess the output of the question

// function a(){
//     console.log(this);     // HERE, this references the global object ie window,because here this function is a regular function
// }

// a.call({name :'kARUN'}); // by using call method, here we are changing the value of this, here functions are objects
                         // so, we have call method inside the object (as functions are objects),so here
                         // this refereces the object present inside the call method.

//18)

// function start (a,b){
//     this.a = a;
//     this.b = b;
//     console.log(this);            
// }
// start.call({ name :'kARUN'}, 1,2); 

//19)

// function start (a,b){
//     this.a = a;
//     this.b = b;
//     console.log(this);    //no idea
// }          
// start.apply({ name :'kARUN'}, [1,2] ); 

//20)

// function start (){
//     console.log(this); 
// }

// start.bind({ name :'kARUN'})();

//21) Spread Operator Output question 

// !) const num =[1,2,3]
// const newnum = [num,4]
// console.log(newnum);         // [ [ 1, 2, 3 ], 4 ]


// !!) const num =[1,2,3]
// const newnum = [...num,4]
// console.log(newnum);        // [ 1, 2, 3, 4 ]
 