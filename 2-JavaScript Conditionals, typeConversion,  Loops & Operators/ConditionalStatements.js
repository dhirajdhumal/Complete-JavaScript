/*
    Conditional Statements
        -conditional statements are used to perform different actions based on different conditions
    
    There are different types of conditional statements in JavaScript:
        -if statement
        -if else statement
        -if else if statement
        -switch statement
*/

/*
    1)if Statement
        -if statement is used to execute a block of code if a specified condition is true
        -if statement has only one part: condition
*/
console.log("If Statement----");
let age = 18;
if(age >= 18){
    console.log("You are eligible to vote");
}

/*
    2)if else Statement
        -if else statement is used to execute a block of code if a specified condition is true, and another block of code if the condition is false
        -if else statement has two parts: condition and else
*/
console.log("\nIf Else Statement----");
let age2 = 17;
if(age2 >= 18){
    console.log("You are eligible to vote");
} else {
    console.log("You are not eligible to vote");
}

/*
    3)if else if Statement
        -if else if statement is used to execute a block of code if a specified condition is true, and another block of code if the condition is false, and another block of code if the condition is false.
        -if else if statement has three parts: condition, else if, and else     
*/
console.log("\nIf Else If Statement----");
let age3 = 25;
if(age3 < 18){
    console.log("You are not eligible to vote");
} else if(age3 >= 18 && age3 <= 25){
    console.log("You are eligible to vote");
} else {
    console.log("You are not eligible to vote");
}

/*
    4)Switch Statement
        -switch statement is used to perform different actions based on different conditions
        -switch statement has multiple parts: case, break, and default
        -switch statement is used to execute a block of code based on different cases
*/
console.log("\nSwitch Statement----");
let day = 3;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");  
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
        break;
}