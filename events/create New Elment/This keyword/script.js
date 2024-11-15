function foo(){
    console.log(this,"context");
}
foo();


// example 1

// var obj = {
//   name: "utkarsh",
//   rollNumber: 12,
//   func: function () {
//     // context -> this -> obj
//     console.log(this, "context");

//     console.log(`hello guys my name is ${this.name}`);
//   },
// };

// console.log(obj.name); // utkarsh
// console.log(obj.rollNumber); // 12
// // obj.func(); // hello guys

// obj.func(); // is this a call site ? YES
// // have I given any Extra Information to func() ? yes




var obj = {
  name: "utkarsh",
  rollNumber: 12,
  func: function () {
    // context -> this -> obj
    console.log(this, "context");

    console.log(`hello guys my name is ${this.name}`);
  },
};

obj.func(); // is this a call site ? // yes
// have I given some Extra info to func() ?  // yes

// hello guys my name is utkarsh

console.log(" ---- - - - - - -x-x-x-x-x-x-x-x-- - - - - - - -");

const funcCopy = obj.func; // is this a CALL SITE ? // NOOOOOOOO

funcCopy(); // is this a call site ? // yes
// have I given some Extra info to funcCopy() ? // NO

// Context as null/window

// hello guys my name is



// example 3 ->

let obj2 = {
  name: "utkarsh",
  func: function () {
    // context -> this -> obj2
    console.log(`hello... ${this.name}`);
  },
};

let obj1 = {
  name: "akash",
  rollNumber: 12,
  obj2: obj2,
};

obj1.obj2.func(); // answer for this ?
// is this a call site? YES
// have I given any Extra information to this call site ? // YES