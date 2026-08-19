/*
    Mathematical Functions in JavaScript
    
    what is toFixed() method/function?
    what is toPrecision() method/function?
    what is toString() method/function?
    - toFixed() - returns a string representation of a number with a specified number of decimal places.
    - toPrecision() - returns a string representation of a number with a specified length.
    - toString() - returns a string representation of a number.

    what is Number() constructor?
    - Number() - creates a new Number object.
    
    what is Math Object?
        - Math Object is a built-in object that has properties and methods for mathematical constants and functions. It can be used to perform mathematical operations and calculations in JavaScript.
    - Math.abs() - returns the absolute value of a number.
    - Math.ceil() - returns the smallest integer greater than or equal to a number.
    - Math.floor() - returns the largest integer less than or equal to a number.
    - Math.PI - returns the value of PI.
    - Math.sqrt() - returns the square root of a number.
    - Math.pow() - returns the value of a number raised to a specified power.
    - Math.max() - returns the largest of zero or more numbers.
    - Math.min() - returns the smallest of zero or more numbers.
    - Math.log10() - returns the base 10 logarithm of a number.
    - Math.log() - returns the natural logarithm (base e) of a number.
    - Math.round() - returns the value of a number rounded to the nearest integer.

    - Math.random() - returns a random number between 0 and 1. 0 is included and 1 is excluded.



    Non-primitive datas are comared by refrence.
    Primitives are compared by value.

*/

// toFixed() method/function is used to format a number to a specified number of decimal places and returns the result as a string. It can be useful for displaying numbers in a more readable format, especially when dealing with currency or percentages.
let a = 10;
let b = 545.5478;
console.log(a.toFixed(2)); // 10.00

console.log(b.toFixed(0)); // 546
console.log(b.toFixed(1)); // 545.5
console.log(b.toFixed(2)); // 545.55
console.log(b.toFixed(3)); // 545.548
console.log(b.toFixed(4)); // 545.5478
console.log(b.toFixed(5)); // 545.54780

console.log(typeof b.toFixed(6)); // string

// toPrecision() method/function is used to format a number to a specified length and returns the result as a string. It can be useful for displaying numbers in a more readable format, especially when dealing with large numbers or scientific notation.
let c = 123.456789;
console.log(c.toPrecision(4)); // 123.5

// toString() method/function is used to convert a number to a string representation. It can be useful for displaying numbers in a more readable format, especially when dealing with large numbers or scientific notation.
let d = 123.456789;
console.log(d.toString()); // 123.456789


//Non-primitive datas are comared by refrence.
// Number() constructor is used to create a new Number object. It can be useful for creating number objects that have additional properties and methods.
let e = new Number(10);
console.log(e); // [Number: 10]
console.log(typeof e); // object

//first we create h as a object of number and then we assign h to i. so both h and i are pointing to the same object in memory. so when we compare h and i using == operator, it returns true because they are pointing to the same object in memory.
let h = new Number(20);
let i = h;
console.log(h == i); // true

//first we create f as a object of number and then we create g as a object of number. so both f and g are pointing to different objects in memory. so when we compare f and g using == operator, it returns false because they are pointing to different objects in memory.
let f = new Number(20);
let g = new Number(20);
console.log(f == g); // false

//Primitives are compared by value.
//first we create j as a primitive number and then we create k as a primitive number. so both j and k are pointing to the same value in memory. so when we compare j and k using == operator, it returns true because they are pointing to the same value in memory.
let j = 30;
let k = 30;
console.log(j == k); // true

let l = 30;
let m = l;
console.log(l == m); // true


//Math Object is a built-in object that has properties and methods for mathematical constants and functions. It can be used to perform mathematical operations and calculations in JavaScript.
console.log(Math.abs(-10)); // 10
console.log(Math.ceil(10.1)); // 11
console.log(Math.floor(10.9)); // 10
console.log(Math.PI); // 3.141592653589793
console.log(Math.sqrt(16)); // 4
console.log(Math.pow(2, 3)); // 8
console.log(Math.max(1, 2, 3, 4, 5)); // 5
console.log(Math.min(1, 2, 3, 4, 5)); // 1
console.log(Math.log10(23)); // 1.3617278360175928
console.log(Math.log(23)); // 3.135494213879318

console.log(Math.round(10.5)); // 11
console.log(Math.round(10.4)); // 10
console.log(Math.round(10.6)); // 11

console.log(Math.random()); // returns a random number between 0 and 1. 0 is included and 1 is excluded.
console.log(Math.random() * 10); // returns a random number between 0 and 10
console.log(Math.floor(Math.random()* 10)); // returns a random integer between 0 and 9
console.log(Math.floor(Math.random()* 10) + 1); // returns a random integer between 1 and 10

console.log(Math.floor(Math.random()* 6) + 1); // returns a random integer between 1 and 6
console.log(Math.floor(Math.random()* 100) + 1); // returns a random integer between 1 and 100

//generate a random number between 15-25;

console.log(Math.random()*11 + 15) ;

//generate a OTP of 4 digits
//formula to generate a random number between min and max is Math.floor(Math.random() * (max - min + 1)) + min
console.log(Math.floor(Math.random()*(9999-1000+1) + 1000)); // returns a random number between 1000 and 9999