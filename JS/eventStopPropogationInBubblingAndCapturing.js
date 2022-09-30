// Stop Propogation Method in Bubbling

document.querySelector("#grandParent").addEventListener(
  "click",
  () => {
    console.log("grandParentClicked");
  },
  false
);

document.querySelector("#parent").addEventListener(
  "click",
  (e) => {
    console.log("parentClicked");
    e.stopPropagation(); // the event propogation won't bubble out and all the eventListeners won't be called
  },
  false
);

document.querySelector("#child").addEventListener(
  "click",
  () => {
    console.log("childClicked");
  },
  false
);

// Stop Propogation Method in Capturing

document.querySelector("#grandParent").addEventListener(
  "click",
  () => {
    console.log("grandParentClicked");
  },
  true
);

document.querySelector("#parent").addEventListener(
  "click",
  (e) => {
    console.log("parentClicked");
  },
  true
);

document.querySelector("#child").addEventListener(
  "click",
  (e) => {
    console.log("childClicked");
    e.stopPropagation(); //Propogatio gonna stop here
  },
  true
);
