// ------------createElement------------


// const newHeading1Element = document.createElement("h1");
// // console.log(newHeading1Element);

// newHeading1Element.textContent = "xyz";
// newHeading1Element.style.backgroundColor = "aqua";

// // const bodyElement = document.body;
// // bodyElement.prepend(newHeading1Element);
// // console.log(bodyElement);


// const newElemnt = document.createElement("h1");


// newElemnt.textContent = "Iam new H1 elemrnt";
// newElemnt.style.background = "aqua";

// const newContainer = document.getElementById("container");
// newContainer.append(newElemnt); 
// console.log(newContainer);


// ------------getAttributr() and setAttribute()--------


// const x = document.getElementById("mydiv");
// const attributeValue = x.getAttribute("data-example");

// console.log("Initial value of 'data-example' attribute:"+attributeValue);

// x.setAttribute("data-example","newValue");
// console.log("Updated value of 'data-example' attribute:"+x.getAttribute("data-example"));


// const oldElement = document.getElementById("oldDiv");
//  const x = oldElement.getAttribute("example");
// console.log("this firstValue:" + x);

// oldElement.setAttribute("example","newValue");
// console.log("this is secondValue:" + oldElement.getAttribute("example"));



//----------before,after,append,prepend-------

// ol.before("before");
// ol.after("after");

// let lifrist = document.createElement("li");
// lifrist.innerHTML="prepend";
// ol.prepend(lifrist);

// let lilast = document.createElement("li");
// lilast.innerHTML="append";
// ol.append(lilast);

ol.before("first");
ol.after("last");

let liFirst = document.createElement("li");
liFirst.innerHTML="prepend";
ol.prepend(liFirst);

let liLast = document.createElement("li");
liLast.innerHTML = "append";
ol.append(liLast);