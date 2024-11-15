// class Person {
//     name;
//     age;

//     constructor (inputName,inputAge){
//         this.name = inputName;
//         this.age = inputAge;
//     }

//     canPersonWalk(){
//         console.log("yes i can walk");
//     }
// }


// function PersonFunc(inputName,inputAge){
//     this.name = inputName;
//     this.age = inputAge;


//     this.canPersonWalk = function(){
//         console.log("yes i can walk constructer");
//     };
// }

// const amithObject = new PersonFunc("amith",19);
// amithObject.
   



// /-------------Inheritance-------------


// class student {
//     name;
//     standerd;

//     constructor(name,standerd){
//         this.name = name;
//         this.standerd = standerd;

//     }
//     markAttendance(){
//         console.log(`hey there${this.name} is present is normal class room`);
//     }
//     grades(){
//         console.log("good gredes");
//     }
// }


// // --------------- childe class-------

// class sportCaptain extends student {
//     favToll;
//     constructor(name,standerd,favToll){
//         super(name,standerd);
//         this.favToll = favToll;
//     }

//     Attendance(){
//         console.log(`sport Captain ${this.name} is prasent the parent MarkAttendance`);
//     }
//     routine(){
//         console.log("paly Captain all day and do not study");
//         super.grades();
//     }
// }
// const ram = new student("ram", 23);
// const Harshi = new student("Harshi", 24);
// console.log(ram);
// console.log(Harshi);
// const virat = new sportCaptain("virat",23,"bat");
// console.log(virat);



//--------------- Before ES6 we use constructor function---------------


function student (name,standerd){
    this.name = name;
    this.standerd = standerd;

}
student.prototype.markAttendance = function(){
    console.log(`hey there${this.name} is present is normal class room`);
}
student.prototype.grades = function () {
    console.log("good gredes");
}
const Ram = new student("ram", 23);
console.log(Ram);

// ----------------Childe class-------------------

function sportCaptain (name,standerd,favToll){
    student.call(this,name,standerd);
    this.favToll = favToll;
}

function extendsss(){
    const ObjectWithParent = Object.create(student.prototype);
    sportCaptain.prototype = ObjectWithParent;
    sportCaptain.prototype.constructor = sportCaptain;
}
extendsss();
sportCaptain.prototype.Attendance = function (){
    console.log(`sport captain ${this.name} is parent in the ground`);
}
sportCaptain.prototype.routine = function (){
    console.log("gareds nice");
};

const harshi = new sportCaptain("harshi",23,"choclate");
console.log(harshi);