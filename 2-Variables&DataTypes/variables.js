/*
    Variables in Javascript
    -variables are containers for storing data values
    -variables are declared using the var, let, or const keywords
    
    1)var
    -var is the oldest way to declare a variable
    -var is function scoped
    -var can be re-declared and re-assigned
    -var is hoisted to the top of its scope and initialized with undefined

    2)let
    -let is block scoped
    -let can be re-assigned but not re-declared
    -let is hoisted to the top of its scope but not initialized

    3)const
    -const is block scoped
    -const cannot be re-assigned or re-declared
    -const must be initialized at the time of declaration
    -const is hoisted to the top of its scope but not initialized
*/

//var
var name; //hoisted to the top of its scope and initialized with undefined
var name = "Dhiraj";

var name = "Dhumal"; //re-declared

name = "Dhumal"; //re-assigned

function fun() {
    var surname = "Dhiraj Dhumal"; //function scoped
    console.log(surname); /* Dhiraj Dhumal   because var is the function scope it gives us only inside value of name variable
                          because here we are printing the value of name variable inside the function fun() so it gives us the value of name variable which is declared inside the function fun().*/
}

console.log(surname); /* undefined   because var is the function scope it gives us only outside value of name variable
                      because here we are printing the value of name variable outside the function fun() so it gives us the value of name variable which is declared outside the function fun().*/

if(true){
    var Jay = "Dhiraj Dhumal"; // var is not supports block scope so it is accessible outside the if block
}

console.log(Jay); // Dhiraj Dhumal  because var is not block scoped it gives us the value of Jay variable which is declared inside the if block.


//let
let name1; //hoisted to the top of its scope but not initialized
let name1 = "Dhiraj";
//let name1 = "Dhumal"; we cannot re-declare a let variable
name1 = "Dhumal"; //re-assigned but we cannot redeclare.

if(true){
    let surname1 = "Dhiraj Dhumal"; //block scoped let supports block scope so it is not accessible outside the if block
}

console.log(surname1); /* undefined   because of block scoped it gives undefined value. */


//const
const name2; //hoisted to the top of its scope but not initialized
const name2 = "Dhiraj"; //const must be initialized at the time of declaration
//name2 = "Dhumal"; we cannot re-assign and re-declare a const variable
if(true){
    const surname2 = "Dhiraj Dhumal"; //block scoped const supports block scope so it is not accessible outside the if block
}
console.log(surname2); /* undefined   because of block scoped it gives undefined value. */
