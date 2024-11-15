/*
1. what is throttling?

Ans.  Throttling is technique used to limit to the execution of event handler function, 
      even when this event triggers continuously due to user action. the common use cases are browser resizing,
      window scrolling etc.
      

      const throttle = (func,limit)=>{
        let intThrottle;
        return(...args)=>{
            if(!intThrottle){
                func.apply(this,args);
                intThrottle = true;
                setTimeout(()=> intThrottle = false,limit);
            }
        }
      }
      window.addEventListener("scroll",()=>{
        throttle(handleScrollAnimation, 100);
      });
      
//       */

      
//  /*    
//       2.prototypes

//       Defination : prototypes are objects from which other objects inherit
//                    properties. In javaScript, evry function has a prototype StylePropertyMap,
//                    and objects have an internal `[[Prototype]]` link to another object.


//       */

//       function Person(name) {
//         this.name = name;
//       }
      
//       Person.prototype.greet = function() {
//         console.log("Hello, " + this.name);
//       };
      
//       const person1 = new Person("Alice");
//       person1.greet(); // "Hello, Alice"



//       function Cars(name){
//         this.name = name;
//       }

//     Cars.prototype.ram = function(){
//         console.log("i busy new car in:" + this.name);

//     }
//     const per = new Cars("KIA");
//     per.ram();


      

// import { func } from "prop-types";
/*
      4. Event Loop

         Definition: The event loop is a mechanism that allows JavaScript to perform non-blocking operations by offloading 
            tasks to the browser's APIs and handling their completion via callback functions.


        How it works:

        Call Stack:   Executes synchronous code.
        Web APIs:   Handle asynchronous tasks like setTimeout, HTTP requests.
        Task Queue:   Holds callback functions from completed async tasks.
        Event Loop:  Moves tasks from the queue to the call stack for execution.
            */



        /*
        function 

        */
      


//         import React, { useState, useRef } from "react";

// export default function App() {
//   const [count, setCount] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);
//   const timer = useRef(null);

//   const onStart = () => {
//     if (!isRunning) {
//       setIsRunning(true);
//       timer.current = setInterval(() => {
//         setCount((prevCount) => prevCount + 1);
//       }, 1000);
//     }
//   };

//   const onPause = () => {
//     if (isRunning) {
//       setIsRunning(false);
//       clearInterval(timer.current);
//       timer.current = null;
//     }
//   };

//   return (
//     <div>
//       <h1>Counter: {count}</h1>
//       <button onClick={onStart} disabled={isRunning}>Play</button>
//       <button onClick={onPause} disabled={!isRunning}>Pause</button>
//     </div>
//   );
// }



//------------This Key word /////////

// 1. defualt Binding

// function foo(){
//   console.log("hi");
//   console.log("heloo");
// }
// foo();

// 2. implecity Binding 

// eaxmple 1;

// var obj = {
//   name : "ram",
//   rollNumber:"19Nq1@0314",
//   location: "Dhone",
//   func : function (){
//     console.log(`hello guys this my name is ${this.name} and my rollNumber is ${this.rollNumber}`);

//   }
// }
// obj.func();

// exameple 2

// var obj2 = {
//   name:"ravi bro",
//   number:"987654321",
//   func:function(){
//     console.log(`this name is ${this.name} and number is ${this.number}`)
//   },
// }

// let obj1 = {
//   name : "srinu",
//   rollNumber:"9988998899",
//   obj2:obj2
// };
// obj1.obj2.func();

//3. Explicit Binding 

/*
1.call 
2.apply
3.bind
*/

// const obj ={
//   name:"rohit",
//   rollNumber:"7788998877",
//   func:function(a,b){
//      console.log(`Heloo .. ${this.name} and rollnumber ${this.rollNumber} params ${a}, ${b} `)
//   },
// }
// let obj2 ={
//   name : "ravi",
//   rollNumber:"2233",
//   obj : obj,
// }
// obj.func(60,70);
// obj.func.call(obj,100,200);
// obj.func.apply(obj2,[90,190]);



 /// bind  


// const obj ={
//   name:"rohit",
//   rollNumber:"7788998877",
//   func:function(a,b){
//      console.log(`Heloo .. ${this.name} and rollnumber ${this.rollNumber} params ${a}, ${b} `)
//   },
// }
// let obj2 ={
//   name : "ravi",
//   rollNumber:"2233",
//   obj : obj,
// }
// obj.func(60,70);
// obj.func.call(obj,100,200);
// obj.func.apply(obj2,[90,190]);


// const obj = {
//   name: "utkarsh",
//   rollNumber: 42,

//   func: function (a, b) {
//     console.log(
//       `Hello .. ${this.name} and rollNoo. ${this.rollNumber} params ${a}, ${b}`
//     );
//   },
// };

// // Bind the function to the context of 'obj'
// const boundFunc = obj.func.bind(obj);

// // Do some work

// // Call the bound function with the necessary arguments
// boundFunc(1, 9); // call site


// class Student {
//   name;
//   standard;

//   constructor(name, standard) {
//     this.name = name;
//     this.standard = standard;
//   }

//   markAttendance() {
//     console.log(`Hey there, ${this.name} is present: Normal classroom attendance`);
//   }

//   grades() {
//     console.log("Grades are nice");
//   }
// }

// class SportCaptain extends Student {
//   favTool;

//   constructor(name, standard, favTool) {
//     super(name, standard);
//     this.favTool = favTool;
//   }

//   markAttendance() {
//     console.log(`Sports captain ${this.name} is present on the ground`);
//     super.markAttendance();
//   }

//   routine() {
//     console.log("Play cricket all day and do not study");
//     super.grades();
//   }
// }

// const virat = new SportCaptain("virat", 11, "bat");
// virat.markAttendance();
// virat.routine();


// class Star {
//   name;

//   constructor() {}

//   get getName() {
//     return this.name;
//   }

//   set setName(value) {
//     this.name = value;
//   }
// }

// const sun = new Star();
// sun.setName = "SUN";
// console.log(sun.getName);


// class Circle {
//   constructor(radius) {
//     this.radius = radius;
//   }

//   // Instance method
//   draw() {
//     console.log("Drawing a circle with radius " + this.radius);
//   }

//   // Static method
//   static calculateArea(radius) {
//     return Math.PI * radius * radius;
//   }
// }

// const myCircle = new Circle(10);

// // Calling an instance method
// myCircle.draw(); // Output: Drawing a circle with radius 10

// // Calling a static method
// const area = Circle.calculateArea(10);
// console.log(area); // Output: 314.1592653589793



// Promises  
/*
 1  . Promise is javascript is used to Object Represented to the Eventual completion or failure Asynchronous opration

  There are three State of Promise 
  1. pending
  2.Reslove
  3.Reject
  */

  // function examplePromise(success){
  //   return new Promise((resolve,reject)=>{
  //     setTimeout(()=>{
  //       if(success){
  //         resolve("opration Succeeded");
  //       }else{
  //         reject("Opration Failed!")
  //       }
  //     },1000);
  //   })

  // }

  // let promise = examplePromise(true);
  // console.log(promise);
  // promise.then(
  //   (result)=>{
  //     console.log("Resloved",result);
  //   },
  //   (error)=>{
  //     console.log("Reject",error.message);
  //   }
  // );console.log("promise state after .then()",promise);


  ///  Call back 

   /*  Defination ::  A callback function a function passed a argument to onther function, and is called after 
                       the main function has finished its execution 


                  */
/*

    Synchronous call back 



                       function callFun(name, callback){
                        console.log("Hello " + name);
                        callback();

                       }
                       function sayGoodby(){
                        console.log("GoodBoy");
                       }
                       callFun('ramhhh', sayGoodby);
*/

/*

Synchronous call back 
                       function fecthData(callback){
                        setTimeout(()=>{
                          console.log("Data Fecth Succcesfull ")
                        },2000);
                       }
                       function proceesData(){
                        console.log("Proceesing Data");
                       }
                       fecthData(proceesData);
*/

/*

                       function sayHello(fun){
                        fun();
                       }
                       function navasthe(){
                        console.log("My name is ram");
                       }

                       sayHello(navasthe);

                       */


    //  Closure::  closer in javaScript Write a inner function it acces the outter function varible acees
           
/*
         function outerFun(){
          let name = "harshi";

          function innerFun(){
            console.log(name);
          }
          innerFun();
         }
         outerFun();


         */



// Higher - Order function ::  the Higher oreder function its take one or more arguments its retuns as result 
     
   
/*
    function highoreder(x,y,opration){
       return opration(x,y);
    }
    function add(x,y){
      return x+y;
    }
    function substaction(x,y){
      return x-y;
    }
    const res1 = highoreder(5,6, add);
    console.log(res1);
    const res2 = highoreder(5,6,substaction);
    console.log(res2);

    */

    // Type Coercio::  the type coercion refer to the automatic conversion one data type to onther data type 
    //             during opration where both opration are of diffrent data type

    /*
       let x = 10;
       let y = "10";
      //  console.log(x+y);  //  1010

       let a = "100";
       let b = 10;
      //  console.log(a-b)  // 90

      */


      // Hosting ::  the hosting javaScript mechanisam is a Defulat Behaver of where a varible and method is declered is move top of tha








      // function outerFun(){
      //   let a =10;
      //   function innerFun(){
      //     console.log(a);
      //   }
      //   return innerFun;
      // }
      
      // // const clo = outerFun();
      // const clo = console.log(outerFun(a))
      //  clo();
       function outerFun() {
        let a = 10;
        function innerFun() {
            console.log(a);
        }
        return innerFun;
    }
    
    const clo = outerFun();  // Corrected: Call outerFun() without any arguments.
    clo();                   // Corrected: Call clo() to execute innerFun and log 'a'.
    



      // function outer(){
      //   let count =0;
      //   function inner(){
      //     count++;
      //     console.log(count);
      //   }
      //   return inner;
      // }
      // const closure = outer();
      // console.log(closure())










      
   



      // function findMax(arr){
      //   let maxNumber = arr[0];
      //   for(let i=1;i<arr.length;i++){
      //     if(arr[i]>maxNumber){
      //       maxNumber=arr[i];
      //     }
      //   }return maxNumber;
      // }
      // const array = [3,6,5,7,8,2,4];
      // const result = findMax(array);
      // console.log(result);