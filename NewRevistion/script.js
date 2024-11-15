// const arr = ['one','two','three'];
// const str = 'Hello';


// const res = str.includes('on');
// const anotherVar = arr.includes('onetwo');
// const newvar = str.includes('11');


// console.log(res);
// console.log(anotherVar);
// console.log(newvar);


// console.log(true == '');//false
// console.log('1' == 1);//true
// console.log('1' === 1);//false


// let a =0;
// let b = new Number(10);
// let c = 10;

// console.log( a===b);// fasle



// Shollow copy        Deep Copy 


// let a = {name:'ram'};
// let z = {...a}; // {name : 'ram'}
// z.name='harshi';  // {name : 'harshi'}
// console.log(a.name); // {name : 'ram'};


// console.log(+true); // 1
// console.log(!"xyz"); //false


// Curyying Function------------------------- 
// function curryFunction(a){
//     return function(b){
//         const multi = a*b; // 6
//         return function(c){
//             return multi * c; // 12 

//         }
//     }
// }
// console.log(curryFunction(2)(3)(2)) // 12
  

///  Merge TWo Strings ////
// const str1 = "Hello";
// const str2 = "Wolrd123";

// function mergeTwoString(str1,str2){

//     let result = "";
//     let max = Math.max(str1.length,str2.length);

//     for(let i=0;i<max;i++){
//         if(i<str1.length){
//             result += str1[i];
//         }
//         if(i<str2.length){
//             result += str2[i];
//         }
//     }
//     return result;

// }
// console.log(mergeTwoString(str1,str2));


// const arr =[[1,2],[3,4],[5,6]];
// const res = arr.flat();
// console.log(res); //[1,2,3,4,5];

// let flatArray = arr.reduce((acc,val)=>acc.concat(val),[]);
// console.log(flatArray);



/////    2nd Video///////////////////////////////


// var a= [];
// var b = [];
// console.log(a == b); //flase
// console.log( a=== b); // flase

// let a = [1,8,9,10,22,57,27]

// function array(b,...a){
//     console.log(a); //[8,9,10,11]
// }
// array(3,8,9,10,11); // [8,9,10,11]


// let data = {name:'ram'}
// console.log(delete data); // flase
// console.log(delete data.name); // true
// console.log(data); // {}


// let arr = [1,2,3,4,5];
// console.log(delete arr); // flase
// console.log(delete arr[1]); // true

// What is DStuturing-----------
//  let arr = [1,2,3,4,5];

// let [n1,n2,n3,n4] = arr;
// console.log(n1); // 1


// let a = false || {} || null;
// console.log(a); // {}    becuse of it take positive value ex Null => 0 or empty and false = 0,  {} is positive value

// let number = 123;

// function reverseNumber(n){
//     return parseInt(n.toString().split('').reverse().join(''));

// }
// console.log(reverseNumber(345));



// console.log(x);// undifined
// console.log(y); // Error   y is not Defined
// var x = y = 11;

// console.log('3' + 2 * 5); // 310
// console.log('3'+ 12 + 5);  //3125
// console.log('3' + '12' + 5); //3125 

/////// TDZ -- Temporal Dead Zoen

// In javaScript TDZ refer to the region of code where  a variable is declare but not yet intialized.
//    during this period, accessig the variable will result in a ReferenceError



// let arr = [200,100,330,70];
// arr.sort();
// console.log(arr);//[100,200,330,70]

// arr.sort((a,b)=>a-b);
// console.log(arr); //[ 70, 100, 200, 330 ]


// console.log([] == []);//false
// console.log([] == '');//true

function abc(a,b,c,d,u){

}
console.log(abc.length);