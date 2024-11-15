const grandParentElement = document.getElementById("grandParent");
const parentElement = document.getElementById("parent");
const childElement = document.getElementById("child");

// // If I click on child Element

childElement.addEventListener("click", (eventObj) => {
  console.log("child CLicked");
});

grandParentElement.addEventListener("click", () => {
  console.log("grandparent hello");
});

parentElement.addEventListener("click", (eventObj) => {
  // console.log(eventObj); // target => SomeElement
  console.log("parent clicked !!!");
});
// const greandParent = document.getElementById("grandParent");
// const parentElement = document.getElementById("Parent");
// const childElement = document.getElementById("child");


// childElement.addEventListener("click",(eventobj) =>{
//     // console.log(eventobj);
//     console.log("child Clicked me!!!")
// });


// greandParent.addEventListener("click",() =>{
//     console.log("grandParent heloo");
// });

// parentElement.addEventListener("click",(eventObj) => {
//     // console.log(eventobj);
//     console.log("parent clicked !!!");
// });