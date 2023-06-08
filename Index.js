//Problem 1
//What is a promise? What are promises used for?  What are pro/cons to using a promise? 
//Please code some examples of promises to show to the class. Make sure to go into detail as you explain your code to the class.

// A "Promise" is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason.
// This is used because it lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.
// Pros : Better defined and organized control flow of asynchronous logic, integrated error handling and Enhanced readability.
// Cons : It kills the purpose of asynchronous non-blocking I/O, Only one object can be returned and We cannot return multiple arguments.
// Code example : 
new Promise((resolveOuter) => {
  resolveOuter(
    new Promise((resolveInner) => {
      setTimeout(resolveInner, 1000);
    }),
  );
});


//Problem 2
//What is a callback? What is callback hell? Why does callback hell occur and why should we avoid callback hell?
// Please code an example of callback hell to show to the class. Make sure to go into detail as you explain your code to the class.

// A callback is a special type of function passed as an argument to another function, Callbacks help us make asynchronous calls.
// A callback hell is when we nest multiple callbacks within a function is called a callback hell. The shape of the resulting code structure resembles a pyramid, we should aviod it because It makes the code very difficult to understand and maintain. 
//Code example of callback hell
getArticles(20), (user) => {
  console.log("Fetch articles", user);
  getUserData(user.username, (name) => {
    console.log(name);
    getAddress(name), (item) => {
      console.log(item);
      // this goes on and on...
    }
})
};


//Problem 3 

// Explain how the “this” keyword works differently in arrow functions vs normal functions.  
//Write some code that shows that you understand the difference between how the “this” keyword is used. 

//A regular function will always define its "this" value. The "this" keyword is handled differently by arrow functions. Since it lacks a context of its own, they are unable to define its own.
// Anytime you call "this", they take the value of "this" from the parent scope.

// Normal function
function normalFunction() {
  console.log(this); // 'this' refers to the calling object or undefined (in strict mode)
}

// Arrow function
const arrowFunction = () => {
  console.log(this); // 'this' refers to the lexical scope (enclosing scope) where the function is defined
};

const obj = {
  name: 'Object',
  normal: normalFunction,
  arrow: arrowFunction,
};

// Calling the normal function
obj.normal(); // 'this' refers to the 'obj' object

// Calling the arrow function
obj.arrow(); // 'this' refers to the 'this' value of the enclosing scope (could be the global object, undefined, or any other value)


//Problem 4

//Using only the filter method on the numbers array, create a function that returns a new array that only contains the numbers divisible by both 3 and 6 but NOT 9. 

//const numbers = [48, 20, 18, 7, 12,9, 8,10,12, 96, 3,36,51];



let numbers = [48, 20, 18, 7, 12, 9, 8, 10, 12, 96, 3, 36, 51];

function filterNumbers() {
  return numbers.filter(num => num % 3 === 0 
    && num % 6 === 0 
    && num % 9 !== 0); // Not divisible due to "!" 
}

const filteredNumbers = filterNumbers();
console.log(filteredNumbers);


//Problem 5
//What is a async/await? Why is async/await useful?  What are pro/cons to using async/await?  
//Please code some examples of async/await to show to the class. Make sure to go into detail as you explain your code to the class.

//async makes a function return a Promise and await makes a function wait for a Promise
// It is useful due to the fact that Async/Await makes it easier to write promises. 
// Pros : Code is easily readable , Use numerous async functions in a row and Simpler debugging process. 
// Cons : Although async functions appear synchronous but deep down they are built asynchronous and one must avoid being super sequential while using them.
//An async function is set to show two basic results, either a resolved value or a rejected value, and error handling are not exactly easy for these cases.

function example(){

let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Finished!"), 2000)// created timeout at 2 second delay
  });

  let result = await promise; // wait until the promise resolves 

  alert(result); // "Finished!"
};

example();