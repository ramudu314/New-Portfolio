// const obj = {
//     name: "ram",
//     calss: 12,
//     rollNumber: 314,
// };
// const keyValueArray = Object.entries(obj);
// console.log(keyValueArray);

// function outer(){
//     function inner(){

//     }
//     return inner;
// }
// outer();

// ----------practical things of hof
// let x = 7;
// let y = 9;

// function add(x,y){
//     return x+y;
    
// }
// // console.log(add(7,7));
// function diff(x,y){
//     return x-y;
// }
// function multi(x,y){
//     return x*y;
// }
// console.log(multi(2,3));


// //-----------   SELECTER(get the elemnt)-----
// const elemnet = document.getElementById(heding).style.color="red";
// console.dir(elemnet);


// const newElemnt = document.createElement("h1");
// newElemnt.textContent="Iam new H1 element";

// const containerElement = document.getElementsByTagName("container");
// containerElement.append(newElemnt);

const add = x => y => x+y;
const add2 = add(2);
console.log(add2(3));