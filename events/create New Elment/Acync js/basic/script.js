// console.log("a");
// setTimeout(() => {
//     console.log("b");
// }, 3000);

// console.log("c");

// setTimeout(()=>{
//     console.log("v")
// },3000)


// setTimeout (() => {
//     console.log(" this settime wait some time");
// },2000)



// let obj3 = {
//     a:1000,
//     func: function (){
//         let b = 12;
//         setTimeout(()=>{
//             console.log("hello",this.a,b);
//         },2000);
//     },
// };
// obj3.func();

// let obj4 = {
//     a:1000,
//     func:function(){
//         let b = 12;
//         setTimeout(function() {
//             console.log("heloo",this.a,b);
//         }, 2000);
//     },
// };
// obj4.func();

// console.log("A");
// setTimeout(()=>{
//     console.log("B");
// },0);
// console.log("c");

var a = 12;
 setTimeout(() =>{
    console.log(a);
    var a =99;

 },0);
 console.log("a");