/*
    Loops
        -loops are used to execute a block of code repeatedly
        -loops are used to repeat a block of code until a specified condition is met
        -loops are used to iterate over arrays and objects
        -loops are used to perform a task multiple times
        -loops are used to create infinite loops
        -loops are used to create nested loops
        -loops are used to create while loops
        -loops are used to create do while loops
        -loops are used to create for loops
        -loops are used to create for in loops
        -loops are used to create for of loops

    Types of Loops
        -while loop
        -do while loop
        -for loop
        -for in loop
        -for of loop
        -for each loop
*/

/*
    1) For Loop
        -we use for loop when we know the iterations in advance
        -for loop has three parts: initialization, condition, and increment/decrement
*/
console.log("For Loop");
for(let i = 1; i<=5; i++){
    console.log(i);
}


/*
    2) While Loop
        -we use while loop when we don't know the iterations in advance
        -while loop has only one part: condition    
*/
console.log("While Loop");
let i =0;

while(i<5){
    i++;
    console.log(i);
}

/*
    3) Do While Loop
        -we use do while loop when we want to execute the block of code at least once
        -do while loop has two parts: initialization and condition
*/
console.log("Do While Loop");

let j=0;

do{
    console.log(j);
    j++;
}while(j<0);

/*
    4) For In Loop
        -we use for in loop to iterate over objects
        -for in loop has one part: callback function
*/
console.log("For In Loop");
let obj = {a: 1, b: 2, c: 3};
for(let key in obj){
    console.log(key, obj[key]);
}

/*
    5) For Of Loop
        -we use for of loop to iterate over arrays
        -for of loop has one part: callback function
*/
console.log("For Of Loop");
let arr = [1, 2, 3, 4, 5];
for(let item of arr){
    console.log(item);
}

/*
    6) For Each Loop
        -we use for each loop to iterate over arrays and objects
        -for each loop has one part: callback function
*/
console.log("For Each Loop");
let arr1 = [1, 2, 3, 4, 5];
arr1.forEach(function(item) {
    console.log(item);
});




