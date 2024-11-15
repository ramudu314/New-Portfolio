//  String conversiton 

//  String + Number = String
// 2. String + String = String
// 3.  String + Boolean = String
// String + null = String 


// String + Anything = String;


// Number Conversition 

// var marks = "10";
// console.log(Number(marks));
// console.log(+marks) // This also Currect but Code Readbulity is bad thing

// let anyNumber = "12ramudu9"
// console.log(Number(anyNumber));// This thing is false becuse of this not A Number 


// const mult = '3' * '3' //9
// const add = '3' + '3' //33
// const devisiton = '3' / '3' //1
// const subtraion = '3' - '3' //0
// const module = '3' % '3'//0
// console.log(mult);
// console.log(add);
// console.log(devisiton);
// console.log(subtraion);
// console.log(module);




//       Objects

// let person ={
//     name : 'ram',
//     mail : 'vkambagiriramusu314@gmail.com',
//     number : 9542492126,
// }

// // person = null;
// console.log(person);

// console.log(person.name, "Name");
// delete person.name;
// console.log(person)




///       passBy Value and PassByReferances

// Primitive DataTypes = char, int, bitInt ---> passBy Value


// let num1 = 1;
// let num2 = 2;

// function sum(a,b){
//     a = a+10;
//     b = b+10;
//     return a+b;
// }

// const result1 = sum(1,2);
// const result2 = sum(num1,num2);
// console.log(result1);
// console.log(result2)


//  passByValue->>>>
// This Means your pass any primitive value to function. Javscrip Create the copy of value, 
// any Changes made to the value inside the function Do not Effect Orginal of the variable


// passBy References

// Non-Primitive Data type =>>>  Object, Array



// Pure Function:
// A pure function is a function that always returns the same result if given the same inputs
//  and has no side effects (it doesn't alter or depend on external states).

// Impure Function:
// An impure function is a function that may produce different results for the same inputs or has side effects,
//  meaning it modifies external states (e.g., variables, databases) or interacts with the outside world (e.g., logging, network requests).


/////////   Speard Opreter //////////


// Syntax = ...

// const arr = [1,2,3,4,5];
// const arrCopy = [...arr];
// console.log(arr);
// console.log(...arrCopy);
// console.log(arr === arrCopy); // false 



///// Showllow Copy  vs Deep Copy ////


//    Shollow Copy 

// let person = {
//     name: "ram",
//     code: 12,
//     mail: '123@gmail.com',
//     address: {
//         HNo: 373,
//     }
// };

// let shallowCopy = { ...person };

// // Modifying the shallow copy's properties
// shallowCopy.name = "harshi";  // Change name in the shallow copy
// shallowCopy.address.HNo = 9542;  // Change address HNo in the shallow copy

// console.log(shallowCopy);  // Output: Modified copy
// console.log(person);       // Output: Original person object



///        Hight order Function //////////


// function mainFunction(action,x,y){
//     return action(x,y);
// }
// function add(x,y){
//     return x+y;

// }
// function sub(x,y){
//   return x-y;
// }
// function mul(x,y){
//     return x*y;
// }
// console.log(mainFunction(add,1,2));
// console.log(mainFunction(sub,1,2));
// console.log(mainFunction(mul,1,2));


// function fact(action){
//     return function (number){
//         return number * number;
//     }
// }
// const result = fact(2)
// console.log(result(5));


////    CallBack FUnction ///////


// function add(CallBack, num) {
//     CallBack(); // This calls the sayGoodBoy function
// }

// function sayGoodBoy() {
//     console.log("ram"); // This logs "ram" to the console
// }

// console.log(add(sayGoodBoy, "harshi")); // This will log the return value of add, which is undefined


// function action(fn){
//     fn();
// }
// function newOne(){
//     console.log("Ashok");
// }
// console.log(action(newOne));


// / Promisee ////

// let myPromise = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         let succes =false;
//         if(succes){
//             res("The promise is sussceful");
//         }else{
//             rej("the promise is reject");
//         }
//     },1000);
// })

// myPromise.then((result)=>{
//     console.log(result)
// })
// .catch(error=>{
//   console.log(error);
// });


// let mymypromise = new Promise((res,rej)=>{
//     let TrueAndfalse = true;
//     setTimeout(()=>{
//         if(TrueAndfalse){
//             res("the Promise promis Sucsse");
//         }else{
//             rej("the reject reject promise");
//         }
//     },1000);
// })
// .then(resu=>{
//     console.log(resu);
// })
// .catch(error=>{
//     console.log(error);
// })



// let promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("1St Task is completed");
//     },2000);
// })
// .then((result)=>{
//     console.log(result);
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("2nd Task is Completed");
//         },1000);
//     })
// })
// .then((result)=>{
//     console.log(result);
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("3rd Task is Completed");
//         },1000);
//     })
// })
// .then(result=>{
//     console.log(result);
// })
// .catch(error=>{
//     console.log(error);
// })


//  // pending promise  
// let myPending = new Promise((res,rej)=>{
//     console.log("Promise is pending");

//     setTimeout(()=>{
//         res("promise is Sucssfull");
//     },3000);
// })
// .then((resolve=>{
//     console.log(resolve);
// }))
// .catch(error=>{
//     console.log(error);
// })

let myPromise = new Promise((res,rej)=>{
    console.log("promise is pending");

    setTimeout(()=>{
        res("promise is Succesfull");
    },3000);
})
.then((resolve)=>{
    console.log(resolve);
})
.catch(error=>{
    console.log(error);
})





// async function asyncFunction() {
//     // let ram = await myPending;

//     try{
//         let ram = await myPending;
//         console.log(ram,'wwwwwwwwww');
//     }catch(error){
//         console.log(error);
//     }

// }
// asyncFunction();





let users = [
    {
        name: "Alex",
        age: 30,
        bank: "AxisBank"
    },
    {
        name: "Dave",
        age: 34,
        bank: "ICICI"
    }
]

let banks = [
    {
        name: "AxisBank",
        services: ['a', 'b', 'c']
    },
    {
        name: "ICICI",
        services: ['e', 'f']
    }
]
/* Create a userBanks array combining both arrays. The result should be as below: */
/* 	Output ---let bankUsers = [{
    name: "Alex",
    age: 30,
    bank:"AxisBank",
    services: ['a','b','c']
  },
  {
    name: "Dave",
    age:34,
    bank:"ICICI",
    services: ['e','f']
  }] */



let DeatilsBanksUser = users.map(user => {
    let DeatilsBank = banks.find(bank => bank.name == user.bank)
    return {
        ...user,
        services: DeatilsBank.services
    }
})















// let bankUser = users.map(user=>{
//     let bankDeatils = banks.find(bank=>
//         bank.name == user.bank)
//         return {...user,
//             // back:bankDeatils.name,
//             services: bankDeatils.services

//         }


// })
// console.log(bankUser);






// Given two arrays of objects, merge them into a single array based on a common key.Each object in the result should contain properties from both arrays, 
// where the objects have the same key value.If an object exists in one array but not in the other, include it with the available properties only.

//     Example:

// javascript

// Copy code

// const users = [

//     { id: 1, name: 'Alice' },

//     { id: 2, name: 'Bob' },

// ];

// const orders = [

//     { id: 1, product: 'Laptop' },

//     { id: 2, product: 'Phone' },

//     { id: 3, product: 'Tablet' }

// ];

// // Expected Output:

// // javascript

// // Copy code

// [

//     { id: 1, name: 'Alice', product: 'Laptop' },

//     { id: 2, name: 'Bob', product: 'Phone' },

//     { id: 3, product: 'Tablet' }

// ];

// // Question 2: Merge Multiple Objects by Common Key with Conflict Resolution

// // Given three objects, merge them into one based on a common key.If multiple objects have the same property key, the last value should take precedence.The merged object should only include unique key - value pairs.

// //     Example:

// // javascript

// // Copy code

// const obj1 = { id: 1, name: 'Alice', age: 25 };

// const obj2 = { id: 1, name: 'Alice', age: 30, city: 'New York' };

// const obj3 = { id: 1, name: 'Alice', age: 35, city: 'San Francisco' };

// // Expected Output:

// // javascript

// // Copy code

// { id: 1, name: 'Alice', age: 35, city: 'San Francisco' }

// // Question 3: Merging and Aggregating Data from Multiple Arrays

// // Given two arrays of objects, merge them based on a common key and create a new property to hold an array of matching records.

// //     Example:

// // javascript

// // Copy code

// const users = [

//     { id: 1, name: 'Alice' },

//     { id: 2, name: 'Bob' }

// ];

// const orders = [

//     { userId: 1, product: 'Laptop' },

//     { userId: 1, product: 'Phone' },

//     { userId: 2, product: 'Tablet' }

// ];

// // Expected Output:

// // javascript

// // Copy code

// [

//     { id: 1, name: 'Alice', orders: ['Laptop', 'Phone'] },

//     { id: 2, name: 'Bob', orders: ['Tablet'] }

// ]

// // Question 4: Deep Merge by Common Key

// // Given two nested objects, merge them based on a common key.If any properties overlap, values from the second objec