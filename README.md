1. Hoisting: Understanding Hoisting in JavaScript
---------------------
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase. However, only the declarations are hoisted, not the initializations.


console.log(a); // undefined

var a = 5;

console.log(b); // ReferenceError: b is not defined
let b = 5;

foo(); // "Hello"
function foo() {
console.log("Hello");
}



In the example:

var a is hoisted, so a is known at the top but not initialized.
let b is not hoisted in a way that makes it accessible before the declaration (temporal dead zone).
Function foo is fully hoisted including its body.



2. Call, Apply, Bind, and Polyfill of Bind
call(): Invokes a function with a specified this context and arguments.


function greet(greeting) {
    console.log(`${greeting}, ${this.name}`);
}
const person = { name: 'Alice' };
greet.call(person, 'Hello'); // "Hello, Alice"
apply(): Similar to call(), but takes an array of arguments.

javascript
Copy code
greet.apply(person, ['Hi']); // "Hi, Alice"
bind(): Returns a new function, permanently bound to the specified this context and optional arguments.

javascript
Copy code
const boundGreet = greet.bind(person, 'Hey');
boundGreet(); // "Hey, Alice"
Polyfill for bind():

javascript
Copy code
if (!Function.prototype.bind) {
    Function.prototype.bind = function(context, ...args) {
        const fn = this;
        return function(...newArgs) {
            return fn.apply(context, args.concat(newArgs));
        };
    };
}
3. Event Loop with Respect to setTimeout
The event loop is a mechanism that handles asynchronous callbacks in JavaScript. setTimeout is a way to defer the execution of a function.

javascript
Copy code
console.log('Start');
setTimeout(() => {
    console.log('Timeout');
}, 0);
console.log('End');

// Output order: Start, End, Timeout
setTimeout with 0 ms does not execute immediately but after the current execution context and the call stack are cleared.

4. Promise.all and Its Polyfill
Promise.all() takes an array of promises and returns a single promise that resolves when all promises have resolved or rejects if any promise rejects.

javascript
Copy code
Promise.all([promise1, promise2, promise3])
    .then(([result1, result2, result3]) => {
        console.log(result1, result2, result3);
    })
    .catch(error => {
        console.error(error);
    });

// Polyfill
Promise.myAll = function(promises) {
    return new Promise((resolve, reject) => {
        let results = [];
        let completed = 0;

        promises.forEach((promise, index) => {
            Promise.resolve(promise).then(value => {
                results[index] = value;
                completed++;
                if (completed === promises.length) {
                    resolve(results);
                }
            }).catch(reject);
        });
    });
};
5. Box Model
The CSS box model describes the rectangular boxes generated for elements in the document tree and consists of:

Content
Padding
Border
Margin
html
Copy code
<style>
  .box {
      width: 100px;
      padding: 10px;
      border: 5px solid black;
      margin: 20px;
  }
</style>
<div class="box">Box</div>
In this example:

Content width is 100px.
Total width including padding, border, and margin is 100 + 210 + 25 + 2*20 = 170px.
6. Multiple Inheritance
JavaScript does not support multiple inheritance directly, but you can achieve similar functionality using mixins.

javascript
Copy code
const canEat = {
    eat: function() {
        console.log('Eating');
    }
};

const canWalk = {
    walk: function() {
        console.log('Walking');
    }
};

function Person(name) {
    this.name = name;
}

Object.assign(Person.prototype, canEat, canWalk);

const person = new Person('John');
person.eat(); // Eating
person.walk(); // Walking
7. Super Call to Parent in Inheritance
The super keyword is used to call the constructor of a parent class.

javascript
Copy code
class Parent {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello from ${this.name}`);
    }
}

class Child extends Parent {
    constructor(name, age) {
        super(name);
        this.age = age;
    }

    greet() {
        super.greet();
        console.log(`I am ${this.age} years old`);
    }
}

const child = new Child('Alice', 10);
child.greet();
// "Hello from Alice"
// "I am 10 years old"
8. Cookies vs Local Storage
Cookies:

Small data stored on the client-side.
Automatically sent with each HTTP request.
Limited to about 4KB.
Can have expiration dates.
Local Storage:

Part of the Web Storage API.
Stores data with no expiration time.
Larger storage limit (5-10MB).
Data is not sent with HTTP requests.
9. Web Workers
Web Workers allow for running scripts in background threads, improving performance by offloading tasks from the main thread.

javascript
Copy code
// main.js
const worker = new Worker('worker.js');
worker.postMessage('Hello Worker');

worker.onmessage = function(event) {
    console.log('Received from worker:', event.data);
};

// worker.js
onmessage = function(event) {
    console.log('Message received from main script');
    postMessage('Hello Main');
};
10. Reduce and Its Polyfill
reduce() executes a reducer function on each element of the array, resulting in a single output value.


const sum = [1, 2, 3, 4].reduce((accumulator, currentValue) => accumulator + currentValue, 0); // 10

// Polyfill
if (!Array.prototype.myReduce) {
    Array.prototype.myReduce = function(callback, initialValue) {
        let accumulator = initialValue !== undefined ? initialValue : this[0];
        let startIndex = initialValue !== undefined ? 0 : 1;

        for (let i = startIndex; i < this.length; i++) {
            accumulator = callback(accumulator, this[i], i, this);
        }
        return accumulator;
    };
}
11. Browser Rendering and Reflow
Browser Rendering involves parsing HTML and CSS to construct the DOM and CSSOM, followed by layout and painting.

Reflow (or layout) occurs when the browser recalculates the positions and geometries of elements, which can be triggered by DOM changes, window resizing, etc.


// Example causing reflow
element.style.width = '500px'; // Changing dimensions
document.body.appendChild(newElement); // Adding new elements

Minimizing reflow is critical for performance.

12. Promise then vs setTimeout
Using then with Promises schedules the callback to run after the current script and microtasks.


Promise.resolve().then(() => console.log('Promise'));
setTimeout(() => console.log('setTimeout'), 0);

console.log('Sync code');

// Output order: Sync code, Promise, setTimeout
Promise callbacks are part of the microtask queue and run before the macrotask queue (which includes setTimeout).
setTimeout callbacks run in the next iteration of the event loop.
By understanding these key concepts, you'll have a solid foundation in JavaScript and web development practices.
