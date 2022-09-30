// for(var i=1; i<=10; i++)
// {
//     setTimeout( function cb ()
//     {
//         console.log(i);
//     }, 2000);
// }

console.log("before");
setTimeout(function(){
    console.log("time over");
},5000);
console.log("after");



