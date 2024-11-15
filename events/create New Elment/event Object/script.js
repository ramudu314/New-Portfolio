const grandParent = document.getElementById("grandparent");
const parentElement = document.getElementById("parent");
const childElement = document.getElementById("child");

childElement.addEventListener(
    "click",
    () => {
        console.log("child clicked");
    },
    true // specifying capture phase
);

grandParent.addEventListener(
    "click",
    (eventObj) => {
        console.log("grandParent hello");
    },
    true // specifying capture phase
);

parentElement.addEventListener(
    "click",
    (eventObj) => {
        console.log(eventObj);
        console.log("parent clicked !!!");
    },
    true // specifying capture phase
);
