/*
    Arrays in JavaScript
        -it is a collection of elements, which can be of any data type
        -it is mutable, meaning that you can change the values of its elements after it has been created
        -it is a data structure that can hold multiple values at once
        -it is a special type of object that has numbered indexes
        -it can hold any type of data, including numbers, strings, objects, and even other arrays
        -it can store values of different types in the same array
            example: [1, "hello", {name: "John"}, [1, 2, 3]]
        -it is a dynamic data structure, meaning that its size can change during runtime
        -it has built-in methods for adding, removing, and manipulating elements
        -it is zero-indexed, meaning that the first element is at index 0, the second element is at index 1, and so on

    Why array is a type of object?
        -because it store different types of data like an object.
        -it does not store in contiguous memory locations like an object.
        -here the size of data is not fixed like an object.
        -it is a special type of object that has numbered indexes.
        -it has a length property that can be used to determine the number of elements in the array.
*/

let myArray = [1, 2, 3, 4, 5];
console.log(myArray);





//.length
let marks = [90, 80, 70, 60, 50];
console.log(marks.length); // 5

//storing different types of data in an array
let mixedArray = [1, "hello", {name: "John"}, [1, 2, 3]];
console.log(mixedArray);





//accessing elements in an array
let fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // "apple"
console.log(fruits[1]); // "banana"
console.log(fruits[2]); // "cherry"

//modifying elements in an array
console.log(fruits); // ["apple", "banana", "cherry"]
fruits[1] = "blueberry";
console.log(fruits); // ["apple", "blueberry", "cherry"]






//adding elements to end of an array 
//using push() method
fruits.push("date");
fruits.push(50);
console.log(fruits); // ["apple", "blueberry", "cherry", "date", 50]

//removing elements from end of an array
//using pop() method
fruits.pop();
console.log(fruits); // ["apple", "blueberry", "cherry", "date"]

//unshift and shift methods are not reccommended to use in prodcution beaacuse it downs the performance of the application.
//adding elements to beginning of an array
//using unshift() method
fruits.unshift("kiwi");
fruits.unshift("mango");
console.log(fruits); // ["mango", "kiwi", "apple", "blueberry", "cherry", "date"]

//removing elements from beginning of an array
//using shift() method
fruits.shift();
console.log(fruits); // ["kiwi", "apple", "blueberry", "cherry", "date"]






//iterating over an array using for loop
let arr = [10,20,50,4,5,69,52,33];
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

//iterating over an array using for...of loop
console.log("Using for...of loop");
for(let value of arr){
    console.log(value);
}









//ex copy by reference
let arr1 = [1,2,3,4,5];
let arr2 = arr1;

console.log(arr1); // [1, 2, 3, 4, 5]
console.log(arr2); // [1, 2, 3, 4, 5]

arr2[0] = 100;
console.log(arr1); // [100, 2, 3, 4, 5]
console.log(arr2); // [100, 2, 3, 4, 5]








//slice method
//it return a new array containing a portion of the original array.
//it does not modify the original array.
let arr3 = [1,2,3,4,5];
let arr4 = arr3.slice(0, 3);
console.log(arr3); // [1, 2, 3, 4, 5]
console.log(arr4); // [1, 2, 3]

//splice method
//it modifies the original array by removing or replacing elements.
let arr5 = [1,2,3,4,5];
arr5.splice(1, 3); // remove 3 elements starting from index 1
console.log(arr5); // [1, 5]

arr5.splice(1,3, "Dhiraj", "Dhumal"); // remove 3 elements starting from index 1 and add "Dhiraj" and "Dhumal"
console.log(arr5); // [1, "Dhiraj", "Dhumal"]












//concat method
//it is used to merge two or more arrays into a new array.
let arr8 = [1,2,3];
let arr9 = [4,5,6];
let arr10 = [7,8,9];

let arr11 = arr8.concat(arr9, arr10);
console.log(arr11); // [1, 2, 3, 4, 5, 6]

let arr12 = [arr8, arr9, arr10];
console.log(arr12); // [[1, 2, 3], [4, 5, 6], [7, 8, 9]]








//Spread operator
//it is used to copy the elements of an array into a new array.
let arr6 = [1,2,3,4,5];
let arr7 = [...arr6];
console.log(arr6); // [1, 2, 3, 4, 5]
console.log(arr7); // [1, 2, 3, 4, 5]

let arr13 = [1,2,3];
let arr14 = [4,5,6];
let arr15 = ["Dhiraj", "Dhumal"];
let arr16 = [...arr13, ...arr14, ...arr15];
console.log(arr16); // [1, 2, 3, 4, 5, 6, "Dhiraj", "Dhumal"]   

//Array Destructuring
//it is used to extract values from an array and assign them to variables.
let arr17 = [1,2,3,4,5];
let [a, b, c] = arr17;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

let [x, y, z, ...rest] = arr17;
console.log(x); // 1
console.log(y); // 2
console.log(z); // 3
console.log(rest); // [4, 5]

let arr18 = [1,2,3,4,5];
let [first, second, ...others] = arr18;
console.log(first); // 1
console.log(second); // 2
console.log(others); // [3, 4, 5]


/*
    Difference between Spread operator and Array Destructuring
        1)Spread
            -it is used to copy the elements of an array into a new array.
            -it is used to merge two or more arrays into a new array.
            -it is used to pass the elements of an array as arguments to a function.
            -example: let arr1 = [1,2,3]; let arr2 = [4,5,6]; let arr3 = [...arr1, ...arr2]; console.log(arr3); // [1, 2, 3, 4, 5, 6]
        2)Array Destructuring
            -it is used to extract values from an array and assign them to variables.
            -it is used to extract values from an array and assign them to variables in a single line of code.
            -it is used to extract values from an array and assign them to variables in a single line of code, while also allowing you to assign the remaining values to a new array using the rest operator.
            -example: let arr = [1,2,3,4,5]; let [a, b, ...rest] = arr; console.log(a); // 1 console.log(b); // 2 console.log(rest); // [3, 4, 5]
        3)rest operator
            -it is used to collect the remaining elements of an array into a new array.
            -it is used to collect the remaining elements of an array into a new array, while also allowing you to extract values from the array and assign them to variables in a single line of code.
            -example: let arr = [1,2,3,4,5]; let [a, b, ...rest] = arr; console.log(a); // 1 console.log(b); // 2 console.log(rest); // [3, 4, 5]
*/






//join method
//it is used to join the elements of an array into a string.
let arr19 = ["Dhiraj", "Dhumal", "is", "a", "good", "boy"];
let str = arr19.join(" ");
console.log(str); // "Dhiraj Dhumal is a good boy"







//indexOf method and lastIndexOf method
//it is used to find the index of an element in an array.
let arr20 = [1,2,3,4,5,3];
console.log(arr20.indexOf(3)); // 2
console.log(arr20.indexOf(6)); // -1

console.log(arr20.lastIndexOf(3)); // 5
console.log(arr20.lastIndexOf(6)); // -1








//sort method
//it uses sorting by Strings by default because array contains different types of datas thats why it is sorting the numbers as strings.
let arr21 = [5, 3, 8, 1, 2];
arr21.sort();
console.log(arr21); // [1, 2, 3, 5, 8]

 //it is not sorting the numbers in ascending order because it is sorting the numbers as strings
let arr23 = [3, 23, 55, 35, 2];
console.log(arr23.sort()); // [2, 23, 3, 35, 55]

arr23.sort((a, b) => a - b); // sorting numbers in ascending order
console.log(arr23); // [2, 3, 23, 35, 55]

arr23.sort((a, b) => b - a); // sorting numbers in descending order
console.log(arr23); // [55, 35, 23, 3, 2]

//sort method are check by character using ascii values
let rra = ["Suyash", "Dhiraj", "Amit", "Rohit"];
rra.sort();
console.log(rra); // ["Amit", "Dhiraj", "Rohit", "Suyash"]

let arr22 = ["adesh", "Dhiraj", "Amit", "Rohit"];
arr22.sort();
console.log(arr22); // ["Amit", "Dhiraj", "Rohit", "adesh"]

arr22.reverse();
console.log(arr22); // ["adesh", "Rohit", "Dhiraj", "Amit"]






//Flattening an array
//it is used to flatten a nested array into a single array.
let arr24 = [1, 2, [3, [25, 45, 78], 4], [5, 6]];
let flatArr = arr24.flat(); // it flattens the array by one level 
console.log(flatArr); // [1, 2, 3, [25, 45, 78], 4, 5, 6]

let flatArr2 = arr24.flat(2); // it flattens the array by two levels
console.log(flatArr2); // [1, 2, 3, 25, 45, 78, 4, 5, 6]

let arr25 = [1, 2, [3, [25, 45, 78], 4], [5, 6]];
let flatArr3 = arr25.flat(Infinity); // it flattens the array by infinite levels
console.log(flatArr3); // [1, 2, 3, 25, 45, 78, 4, 5, 6]