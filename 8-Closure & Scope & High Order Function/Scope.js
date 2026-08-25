//Scope and Clousure, HOF

// Scope - The scope of a variable is the region of the code where it can be accessed. 
// In JavaScript, there are three types of scope: global scope, function scope, and block scope.
/* 
    Global Scope -
        - Variables declared outside of any function or block are in the global scope.
        - They can be accessed from anywhere in the code.
*/
let a = 10; //global scope
const b = 20; //global scope

console.log(a); //global scope
console.log(b); //global scope

if(true){
    console.log(b); //global scope
}

function greet(){
    console.log(a);//global scope
}
greet();





/*
    Function Scope -
        - Variables declared inside a function are in the function scope.
        - They can only be accessed from within the function.
*/
function greet2(){
    let c = 30;
    const d = 40;
    console.log(c); //function scope
    console.log(d); //function scope
}

console.log(d); // ReferenceError: d is not defined
if(true){
    console.log(c); // ReferenceError: c is not defined
}





/* 
    Block Scope -
        - Variables declared inside a block (e.g., if, for, while) are in the block scope.
        - They can only be accessed from within the block.
*/
if(true){
    let e = 50; //block scope
    const f = 60; //block scope
    console.log(e); //block scope
    console.log(f); //block scope
}
console.log(e); // ReferenceError: e is not defined
console.log(f); // ReferenceError: f is not defined


//variable Scopes
/*
    1)var
        - function scoped
        - it have a global scope if declared outside of a function
        - it cannot be block scoped
    2)let
        - block scoped
        - it have a global scope if declared outside of a function
        - it have a block scope if declared inside a block
    3)const
        - block scoped
        - it have a global scope if declared outside of a function
        - it have a block scope if declared inside a block
*/




let global = 10;
function greet3(){
console.log(global); //10
let global = 20; //ReferenceError: Cannot access 'global' before initialization
    function inner(){
        console.log(global); 
        let global = 30; //ReferenceError: Cannot access 'global' before initialization
    }
    inner();
}
greet3(); 


let global2 = 10;
function greet4(){
    console.log(global2); //10
    function inner(){
        console.log(global2); //10
    }
    inner();
}
greet4();