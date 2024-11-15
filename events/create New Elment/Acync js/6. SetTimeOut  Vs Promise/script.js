

// const pokemanServerPromise = new Promise((reslove, reject)=>{
//    setTimeout(()=>{
//       reslove({
//          name : "pikachu",
//          ability: "lighting thunder",
//       });
//    },5000);
// });

// pokemanServerPromise.then((data)=>{
//    console.log(data,"pokemon data")
// });



// ------------Promise are Eager---------------

   // promise creation

//    console.log("Start of the doom");
// const promise = new Promise((reslove)=>{
   
//    console.log("inside the promise");
//    setTimeout (()=>{
//       reslove("resloved success")
//    },5000);
   

// });

// console.log("outSide subScribimg");

// // promise consumption
// promise.then((data)=> console.log("handling result of : ", data));

// console.log("after reslution of promise");



// ------------promise vs SetTimeOut------

const promise = new Promise((reslove)=>{
   reslove(1);
});

setTimeout(()=>{
   console.log("hello");
},0);

promise.then((data)=>{
   console.log(data);
})