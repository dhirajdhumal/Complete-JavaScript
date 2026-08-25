/*
    For Each
        - Executes a function for each element in an array
        - it does not return a new array, it simply executes the function on each element
        - it is used when you want to perform an action on each element of an array
        - it is not chainable, it does not return a new array\
        - it is not used to transform the array, it is used to perform an action on each element of the array
*/

const arr = [10,5,65,4,8,2,33223,112];
// normal function
arr.forEach(function(number,index,arr){
    console.log(number,index,arr);
});

// arrow function
arr.forEach((number,index,arr)=>{
    console.log(number,index,arr);
});


let sum = 0;
arr.forEach(function(num){
    sum += num;
});
console.log(sum);

arr.forEach((num)=>{
    sum += num;
});
console.log(sum);