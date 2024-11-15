// const formElemnt = document.getElementById("form");
// formElemnt.addEventListener("submit",(event) => {
//     event.preventDefault();
// });


//   ------------copy and paste-----

// const formElement = document.getElementById("name");
// formElement.addEventListener("paste",(event)=>{
//     console.log("sumOne paste here!!!!");
//     // event.preventDefault();
// });


// const pasteElemnt = document.getElementById("name");
// pasteElemnt.addEventListener("copy",(event)=>
// {
//     console.log("sumOne copy here!!!!");
//     event.preventDefault();
// });



//    -------focus and blur----------

// pasteElemnt.addEventListener("focus",() =>{
//     console.log("focus");
// });

// pasteElemnt.addEventListener("blur",() =>{
//     console.log("blur");
// });


//   ----key event  ->  keydoen, keyup and keypress------
// pasteElemnt.addEventListener("keypress",(event)=>{
//     console.log("button cliked!!!!");


//     const key = event.key;
//     console.log(key);
// });


// // 
// question: if you write in small csap in an input


//   Question:  if you write in small cap in an Input box automatically it should become capital
 const nameELement = document.getElementById("name");
//  nameELement.addEventListener("change",(event) => {
//     const targetElemnet  = event.target;
//     targetElemnet.value = String(targetElemnet.value).toUpperCase();
//  });

/////////     or      /////////

//[ CHATGPT ANSWER...........]

// nameELement.addEventListener("input",(event)=>{
//     var input = event.target;
   
// input.value = input.value.toUpperCase();})


/*
    Question:  you want only the 1st letter to be capital rest should be in nonCapital


*/
// //sol =>
//     nameELement.addEventListener("input", (event)=>{
//         const targetElement = event.target;
//         const value = String(targetElement.value);
      
//         targetElement.value =
//           value.substring(0, 1).toUpperCase() + value.substring(1).toLowerCase();
//       });




//   what is  payload ?


// In web development, "payload" typically refers to the data that is being sent from one point to another, often in the context of HTTP requests. 
// In the provided code snippet, the payload refers to the data collected from the form fields (name, email, standard) that needs to be sent to the server for processing or storage.

// Here's a breakdown of the payload construction in the code:


// const payload = {
//   name: name,
//   email: email,
//   standard: standard,
// };

// name, email, and standard are variables that hold the values extracted from the respective form fields.
// These values are organized into an object named payload, where each key represents a field name (such as "name", "email", "standard"), and each corresponding value represents the user input for that field.
// This payload object is then typically serialized into JSON format using JSON.stringify(payload). JSON (JavaScript Object Notation) is a common format for exchanging data between a client and a server.
// So, essentially, the payload is a structured set of data representing the form input, which will be sent to the server via an HTTP request (in this case, a POST request to utkarsh.com).


//  when we do event.preventDefault(); 
//   we do 2 things 
  
//   1. Prevent page reload (WHICH IS GOOD).
//   2. prevent payload to go to utkarsh.com (THIS IS BAD).

//   To solve this thing we have to do the 2nd thing ourself. Mentioned below.


//   formElement.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const formElem = event.target; // form Element
//   console.dir(formElem);
//   const elements = formElem.elements; // {elementName: #element}

//   console.dir(elements);

//   // Elements
//   const nameElement = elements.name;
//   const emailElement = elements.email;
//   const standardElement = elements.standard;

//   // values
//   const name = nameElement.value;
//   const email = emailElement.value;
//   const standard = standardElement.value;

//   const payload = {
//     name: name,
//     email: email,
//     standard: standard,
//   };

//   console.log(payload, "payload");

//   fetch("utkarsh.com", { method: "post", body: JSON.stringify(payload) });
// });




// // --------------------- REGEX -----------------------

// Matching a Specific Word:

// Regex: \bhello\b
// Explanation: This regex matches the word "hello" exactly, with word boundaries (\b) ensuring that it doesn't match words like "hello123" or "xhello".
// Matching an Email Address:

// Regex: ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
// Explanation: This regex validates an email address. It checks for one or more alphanumeric characters, dots, underscores, percentage signs, plus signs, or hyphens followed by an "@" symbol, followed by one or more alphanumeric characters, dots, or hyphens, followed by a dot and a two or more letter top-level domain.
// Matching a Phone Number:

// Regex: ^\d{3}-\d{3}-\d{4}$
// Explanation: This regex matches a phone number in the format "###-###-####", where each "#" represents a digit.
// Matching Dates in MM/DD/YYYY Format:

// Regex: ^(0[1-9]|1[0-2])/(0[1-9]|1\d|2\d|3[01])/\d{4}$
// Explanation: This regex matches dates in MM/DD/YYYY format, ensuring that the month is between 01 and 12, the day is between 01 and 31, and the year consists of four digits.
// Matching HTML Tags:

// Regex: <[^>]+>
// Explanation: This regex matches HTML tags by looking for text enclosed within angle brackets (< and >). It allows for any characters ([^>]+) except for the closing angle bracket, effectively matching opening and closing tags.
// Matching URLs:

// Regex: ^(https?|ftp):\/\/[^\s\/$.?#].[^\s]*$
// Explanation: This regex matches URLs, including both HTTP and HTTPS protocols, as well as FTP. It ensures that the URL starts with either "http://" or "https://" or "ftp://", followed by any non-whitespace characters that are not special characters like space, slash, dollar sign, question mark, or hash symbol.
// Matching IP Addresses:

// Regex: ^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$
// Explanation: This regex matches IPv4 addresses, where each part consists of one to three digits separated by periods.


// ex=>
// how to submit the Form after I ded event.preventDefault();

// const formElement= document.getElementById("form");

// formElement.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const formElem = event.target; // form Element
//   console.dir(formElem);
//   const elements = formElem.elements; // {elementName: #element}

//   console.dir(elements);

//   // Elements
//   const nameElement = elements.name;
//   const emailElement = elements.email;
//   const standardElement = elements.standard;

//   // values
//   const name = nameElement.value;
//   const email = emailElement.value;
//   const standard = standardElement.value;

//   // Validation

//   // Name ->
//   const nameValidation = nameValidator(name);
//   if (!nameValidation) {
//     console.log("Name is requied and It should be according to the rules!!!");
//     return;
//   }

//   const payload = {
//     name: name,
//     email: email,
//     standard: standard,
//   };

//   console.log(payload, "payload");

//   fetch("utkarsh.com", { method: "post", body: JSON.stringify(payload) });
// });

// function nameValidator(name) {
//   const nameRegex = /^[a-zA-Z]+$/;

//   const validate = name.match(nameRegex); // null or object([])
//   // null -> "1utkarsh", "utkarsh1", "utakr1sh"
//   // [dasdasd ,asdasd ] -> "utkrasah", "akash"

//   if (validate === null) {
//     return false;
//   } else {
//     return true;
//   }
// }

// function phoneNumberValidator(phone) {
//   const phoneRegex = /^[0-9]{10}$/;

//   const validateAnswer = String(phone).match(phoneRegex); // null , []
//   // null -> when number has a problem
//   // [] -> when Number is GOOD.

//   if (validateAnswer) {
//     return true;
//   } else {
//     return false;
//   }
// }