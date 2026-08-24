/* 
    Higher Order Function -
        - A higher-order function is a function that takes one or more functions as arguments, returns a function, or both.

*/


function double(){
    function execute(){
        console.log("Executing...");
    }
    return execute;
}

//we can also return execute function like 
// function double(){
//     return function execute(){
//         console.log("Executing...");
//     }
// }
const n = double();
n(); // Executing...


function add(x){
    return function(y){
        return x + y;
    }
}
const addition = add(5); // x = 5
console.log(addition(10)); // 15 


function greet(name){
    return function(message){
        console.log(`Hello ${name}, ${message}`);
    }
}
const greetMessage = greet("Dhiraj");
greetMessage("How are you?"); // Hello Dhiraj, How are you?