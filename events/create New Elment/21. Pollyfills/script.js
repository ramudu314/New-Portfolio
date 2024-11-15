// what is pollyfills?----------

// ans----
// Polyfills are code snippets or libraries that provide modern functionality in older
//  browsers that do not support certain features or APIs. They "fill in" the gaps in browser 
//  compatibility by implementing the missing functionality using JavaScript.


// function myMap(callback){
//   let newArray = [];
//   const array = this;

//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     const answer = callback(element,i,arr);
//     ansArray.push(answer);
    
//   }
//   return newArray;
// }

// Array.prototype.mYMap = myMap;

// const array = [1,2,3];
// const mapeedArray = array.mYMap((item=> item *2));

// console.log(mapeedArray);




// callback function
// way 1-------------------

// function callback(item,i,arr){
//   return item * 2;
// }
// const array = [1,2,3,4];
// const newArray = array.map(callback);
// console.log(newArray);

// way2-------------

// const array = [1,2,3,4];
// const way2 = array.map((item,i,exam)=> item *2);
// console.log(way2);



// Array.prototype.myMap = function(callback){
//   let newArray = [];
//   for(let item of arr){
//     newArray.push(callback(item));
//   }
//   return newArray;
// }

// const arr = [1,2,3,4,5];
// const answer = arr.myMap(item => item *2);
// console.log(answer);





// Array.prototype.ram = function(Harshi){
//   let newOneAdd = [];
//   for(let item of arr){
//     newOneAdd.push((Harshi(item)));
//   }
//   return newOneAdd;
// }

// const arr = [11, 22,33,44,55];
// const newAnswer = arr.ram(item => item *2);
// console.log(newAnswer);



// Array.prototype.myFilter = function(callback){
//   let newArray = [];
//   for(let item of arr){
//     const ans = callback(item);

//     if(ans){
//       newArray.push(item);
//     }
//   }
//   return newArray;
// }

// const arr = [1,2,3,4,5,6,7,8,9];
// const newAnswer = arr.myFilter((item)=> item > 4);
// console.log(newAnswer);

// // Define the custom method with a different name
// function customFilter(callback) {
//   let newArray = [];
//   for (let item of arr) {
//     const ans = callback(item);

//     if (ans) {
//       newArray.push(item);
//     }
//   }
//   return newArray;
// }

// // Assign the custom method to Array.prototype with the desired name
// Array.prototype.myCustomFilter = customFilter;

// // Example usage
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const newAnswer = arr.myCustomFilter((item) => item > 4);
// console.log(newAnswer);





//  Array.prototype.newMap = function(callback){
//   let newOneArray = [];
//   for(let item of arr){
//     newOneArray.push(callback(item));
//   }
//   return newOneArray;
//  }

//  const arr = [1,2,3,4,5];
//  const answer = arr.newMap(item => item * 2);
//  console.log(answer);


// -------push-----------------------------

// function myPush(value) {
//   // context -> this -> arr

//   const array = this;

//   const n = array.length;

//   array.splice(n, 0, value);

//   return array.length;
// }

// Array.prototype.myPush = myPush;

// const arr = [1, 2, 3, 4, 5];

// const updatedLength = arr.myPush(16); // call site
// arr.myPush(70);

// console.log(updatedLength);
// console.log(arr, "updated arrays");



// -----reduces-----------------



// 4. Reduce.

// EXAMPLE 1:
let arr = [1, 2, 3, 4, 5];

let count = arr.reduce((prev, currentValu) => {
  return prev + currentValu;
}, 100);

let count1 = arr.reduce((prev, currentValu) => {
  return prev + currentValu;
});
