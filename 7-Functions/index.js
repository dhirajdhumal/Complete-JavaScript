/*
    Functions in JavaScript
        -functions are blocks of code that can be defined once and executed multiple times.
        -it is used to reuse code and avoid code repetition.
        
    Why we use functions?
        -to avoid code repetition
        -to make code more organized and readable
        -to break down complex problems into smaller, manageable parts
        -to create reusable code that can be used in different parts of the program
        -to improve maintainability and scalability of the code
    
    Types of functions in JavaScript which are commonly used:
        1)named function
            -named functions are defined using the function keyword followed by a name and a set of parentheses.
            -they can be called before or after they are defined because they are hoisted.
            why we use named functions?
                -they are easier to read and understand because they have a name that describes what the function does.
                -they can be called before they are defined because they are hoisted.
                -they can be used as constructors to create objects.
        2)anonymous function/function expression
            -anonymous functions are defined without a name and are assigned to a variable.
            -they can only be called after they are defined.
            why we use anonymous functions?
                -they are often used as arguments to other functions, such as in callbacks.
                -they can be used to create closures, which are functions that have access to variables in their outer scope.
                -they can be used to create immediately invoked function expressions (IIFEs), which are functions that are executed immediately after they are defined.
        3)arrow function
            -arrow functions are a shorter syntax for writing anonymous functions.
            -without the function keyword and with a => symbol.
            -they can only be called after they are defined.
            Why we use arrow functions?
                -they are more concise and easier to read.
                -they do not have their own this value, which can be useful in certain situations.
                -they are often used in functional programming and when working with higher-order functions.

        4)Immediately Invoked Function Expression (IIFE)
            -IIFE is a function that is executed immediately after it is defined.
            -it is used to create a new scope and avoid polluting the global scope.
            -it is also used to create private variables and functions that cannot be accessed from outside the function.

        5)Callback function
            -A callback function is a function that is passed as an argument to another function and is executed after the outer function has completed.
            -it is used to handle asynchronous operations, such as reading files, making API calls, or handling user input.
            -it is also used to create higher-order functions, which are functions that take other functions as arguments or return functions as their result.
            Why we use callback functions?
                -they allow us to handle asynchronous operations in a more organized and readable way.
                -they allow us to create higher-order functions that can be used to create more complex and reusable code.

*/

//this is a named function
//we can call the function before defining it because it is hoisted
//ex1
function greeting(){
    console.log("Dhiraj Dhumal")
}
greeting(); // calling the function to execute the code inside it

//ex2
function add(a, b){
    const sum = a+b;
    console.log(sum);
}
add(5, 10); // calling the function with arguments to execute the code inside it
add(20, 30); // calling the function with arguments to execute the code inside it

//ex3 returning a value from a function
function multiply(a, b){
    return a*b;
}
console.log(multiply(5, 10)); // calling the function with arguments to execute the code inside it and return the value

//ex4 using rest operator to pass multiple arguments to a function
function sum(...numbers){
    console.log(numbers); // [1, 2, 3, 4, 5]
}
sum(1, 2, 3, 4, 5); // calling the function with multiple arguments to execute the code inside it and return the value






//this is an anonymous function/function expression
//we need to call the function after defining it because it is not hoisted like named functions
const subtract = function(a, b){
    return a-b;
}
console.log(subtract(10, 5)); // calling the function with arguments to execute the code inside it and return the value

//ex4
const divide = function(a, b){
    return a/b;
}
console.log(divide(10, 5)); // calling the function with arguments to execute the code inside it and return the value






//this is an arrow function
//we need to call the function after defining it because it is not hoisted like named functions
//ex1
const greet = () => {
    console.log("Hello, World!");
};
greet(); // calling the arrow function

//ex2
const square = (x) => {
    return x*x;
};
square(5); // calling the arrow function with an argument to execute the code inside it and return the value

//ex3
const cube = (x) => x*x*x; // if there is only one statement in the function, we can omit the curly braces and the return keyword
console.log(cube(5)); // calling the arrow function with an argument to execute the code inside it and return the value

//ex3.1 when we have a single parameter we dont need to add that parameter in brases()
const square1 = num => num*num;
console.log(square1(5));

//ex4 using rest operator to pass multiple arguments to an arrow function
const sumArrow = (...numbers) => {
    console.log(numbers); // [1, 2, 3, 4, 5]
}
sumArrow(1, 2, 3, 4, 5); // calling the arrow function with multiple arguments to execute the code inside it and return the value

//ex5 using arrow function to return an object
const createPerson = () => {
    return { name: "Dhiraj", age: 22 };
};
console.log(createPerson()); 

//ex5.1 using arrow without return statement when we have an a object we need to add it in parenthesis;
const createPerson1 = () => ({ name: "Jay", age: 18});
console.log(createPerson1());





// Immediately Invoked Function Expression (IIFE)
//IIFE is a function that is executed immediately after it is defined.
//it is used to create a new scope and avoid polluting the global scope.
//it is also used to create private variables and functions that cannot be accessed from outside the function.
//(function)(function call);
(function(){
    console.log("IIFE");
})()





// Callback function
//A callback function is a function that is passed as an argument to another function and is executed after the outer function has completed.
function dhiraj(callback){
    console.log("Hello, I am Dhiraj");
    callback(); // calling the callback function
}

function jay(){
    console.log("Hello, I am Jay");
}

dhiraj(jay); // calling the function with a callback function as an argument to execute the code inside it and return the 

//example of callback function 
// we have a three function, one is the main function and other two are our callback functions, we need to call one time one funtion how we call using callback function first we call the main function inside that we call one time first callback function and after that we call the second callback function, so we can call one time one function using callback function.
function first(){
    console.log("Hello, I am first function");
}

function second(){
    console.log("Hello, I am second function");
}

function main(callback){
    console.log("Hello, I am main function");
    callback(); // calling the callback function
    //first(); if we write here then it will call the first function every time we call the main function, so we need to call the callback function instead of calling the first function directly.
    //second(); if we write here then it will call the second function every time we call the main function, so we need to call the callback function instead of calling the second function directly.
    // but the our scenario is call one function at a time using main function, so we need to call the callback function instead of calling the first and second function directly.
}

main(first); // calling the main function with a callback function as an argument to execute the code inside it and return the value
main(second); // calling the main function with a callback function as an argument to execute the code inside it and return the value

//real world example of callback function
// we have a function called getData which is used to get data from an API, and we have a callback function called displayData which is used to display the data on the console, so we can call the getData function and pass the displayData function as a callback function to display the data on the console after getting the data from the API.
function getData(callback){
    //simulating an API call with setTimeout
    setTimeout(() => {
        const data = { name: "Dhiraj", age: 22 };
        callback(data); // calling the callback function with the data as an argument
    }, 2000);
}

function displayData(data){
    console.log(data); // displaying the data on the console
}

// getData(displayData); // calling the getData function with a callback function as an argument to execute the code inside it and return the value

//ex 2 blinkit, zomato, swiggy payment gateway, we have a function called payment which is used to make a payment, and we have a callback function called success which is used to display the success message on the console, so we can call the payment function and pass the success function as a callback function to display the success message on the console after making the payment.
function payment(callback){
    //simulating a payment gateway with setTimeout
    setTimeout(() => {
        const paymentStatus = "success";
        callback(paymentStatus); // calling the callback function with the payment status as an argument
    }, 2000);
}

function success(paymentStatus){
    console.log(`Payment ${paymentStatus}`); // displaying the payment status on the console
}

// payment(success); // calling the payment function with a callback function as an argument to execute the code inside it and return the value


//ex 3 we have an three function 
function zomatoOrder(){
    console.log("Your Zomato order is placed successfully");
}

function swiggyOrder(){
    console.log("Your Swiggy order is placed successfully");
}

function blinkitOrder(){
    console.log("Your Blinkit order is placed successfully");
}

function payment1(amount, callback){
    console.log(`${amount} payment is processing...`);
    console.log("Please wait...");
    console.log("Payment is recievd");
    callback(); // calling the callback function
}

payment1(320, zomatoOrder); // calling the payment function with a callback function as an argument to execute the code inside it and return the value
payment1(450, swiggyOrder); // calling the payment function with a callback function as an argument to execute the code inside it and return the value
payment1(150, blinkitOrder); // calling the payment function with a callback function as an argument to execute the code inside it and return the value


