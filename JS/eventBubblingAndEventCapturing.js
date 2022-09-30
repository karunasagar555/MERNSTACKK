//EventBubbling

document.querySelector("#grandParent")
 .addEventListener('click', () => {
    console.log("grandParentClicked");
 });

 document.querySelector("#parent")
 .addEventListener('click', () => {
    console.log("parentClicked");
});

document.querySelector("#child")
 .addEventListener('click', () => {
    console.log("childClicked");
 });

 */

 //Event Capturing/Event Trickling
 document.querySelector("#grandParent")
 .addEventListener('click', () => {
    console.log("grandParentClicked");
 }, true);

 document.querySelector("#parent")
 .addEventListener('click', () => {
    console.log("parentClicked");
}, true);

document.querySelector("#child")
 .addEventListener('click', () => {
    console.log("childClicked");
 }, true); 


// MIXMATCH OF PARAMETERS TRUE AND FALSE ( Event Capturing Cycle takes place seperately and then Event Bubbling cycle takes place )

document.querySelector("#grandParent")
 .addEventListener('click', () => {
    console.log("grandParentClicked");
 }, true); // Top-Down hierarchy is followed so Event Capturing takes place here.

 document.querySelector("#parent")
 .addEventListener('click', () => {
    console.log("parentClicked");
}, false); // Bubbling here

document.querySelector("#child")
 .addEventListener('click', () => {
    console.log("childClicked");
 }, true);