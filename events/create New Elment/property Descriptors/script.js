let obj = {
    name: "ram",
    class: 15,
}
console.log(obj);

// Edit

// obj.name = "Harshi"
// console.log(obj);
// // delete
// delete obj.name;
// console.log(obj);


const decsriptorOfName = Object.getOwnPropertyDescriptor(obj,"name");
console.log(decsriptorOfName);


// ------WRITABLE-------

// Object.defineProperty(obj,"name",{
//     writable:false,
// });
// console.log(obj, "after the name edit");
// console.log(Object.getOwnPropertyDescriptor(obj,"name"));



//  ------------CONFIGURABLE--------------
// Object.defineProperty(obj,"name",{
//     configurable:false,
// });
// console.log(obj, "after the name DELETE");
// console.log(Object.getOwnPropertyDescriptor(obj,"name"));

// -----------Enumerability----------

// Object.defineProperty(obj,"name",{
//     enumerable:false,
// });
// for(let key in obj){
//     console.log(key,"enum");
// }





// can you write on this Property

// Property Flags ->
// 1. Writable: if the writable value is TRUE, basically means we can change the value otherwise not.
// 2. Enumerable: if TRUE -> you can do for in loop. (YOU would be included in FOR-IN loop)
// 3. configurable: if TRUE -> properties can be DELETED.

// NOTE: OwnProperty -> are inside the Object on the 1st level and other properties which
//  are on PROTOTYPE they are NOT OwnProperty.
