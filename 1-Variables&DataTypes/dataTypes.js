/*
    Data Types in JavaScript
    -Data types are used to represent the type of data that can be stored in a variable.
    -There are two types of data types in JavaScript:
        1)Primitive Data Types
        2)Non-Primitive Data Types

    1)Primitive Data Types 
    -primitive data types are the most basic data types in JavaScript.
    -There are 7 primitive data types in JavaScript:
        1)Number
        2)String
        3)Boolean
        4)Undefined
        5)Null
        6)Symbol
        7)BigInt
    -primitive data types are immutable, meaning their values cannot be changed once they are created.
        How immutability works in JavaScript?
        -When you try to change the value of a primitive type, a new value is created instead of modifying the existing one.
        -a new value is created in memory and the variable is updated to reference the new value, while the original value remains unchanged.
        -ex 1
            let num = 10;
            num = 20; // trying to change the value of num
            -in memory now num is pointing to 20 but the original value is still 10 and it is not changed and present in memory.
        -ex 2
            let str = "Dhiraj";
            str[0] = "d"; // trying to change the first character of the string
            console.log(str); // Output: "Dhiraj" (the original string remains unchanged)
            -In this example, when we try to change the first character of the string, a new string is created in memory with the updated value, while the original string remains unchanged.

    2)Non-Primitive Data Types
    -non-primitive data types are more complex data types in JavaScript.
    -There are 3 non-primitive data types in JavaScript:
        1)Object
        2)Array
        3)Function
    -non-primitive data types are mutable, meaning their values can be changed after they are created.
        How mutability works in JavaScript?
        -When you change the value of a non-primitive type, the original value is modified in memory.
        -ex 1
            let obj = { name: "Dhiraj" };
            obj.name = "Dhumal"; // changing the value of the object
            console.log(obj); // Output: { name: "Dhumal" } (the original object is modified)
        -also we can change const array and const object because they are mutable.
        -ex 2
            const arr = [1, 2, 3];
            arr.push(4); // adding a new element to the array
            console.log(arr); // Output: [1, 2, 3, 4] (the original array is modified)
            -In this example, we are able to modify the contents of the array even though it is declared as a const because arrays are mutable.
        -ex 3
            let obj = { name: "Dhiraj", age: 25 };
            let newObj = obj; // creating a new reference to the same object
            newObj.age = 30; // modifying the age property of the new object
            console.log(obj); // Output: { name: "Dhiraj", age: 30 } (the original object is modified)
            -In this example, we are able to modify the contents of the object through a new reference because objects are mutable.
    -it is mutable because of memory, if we have 500mb of memory and we create a object of 100mb now if we want to change the value of the object 
     then it will not create a new object in memory because it will take more memory so it will change the value of the existing object in memory.
*/


// 1)Primitives Data Types
/*
    1)Number
    -Number data type is used to represent numeric values in JavaScript.
    -There are two types of numbers in JavaScript:
        1)Integer
        2)Floating Point Numbers
    -Integer is a whole number without a decimal point.
    -Floating Point Numbers are numbers with a decimal point.
    -typeOf Number is number.
*/ 
let num1 = 10;
let num2 = 20.5;
console.log(num1, num2); // 10 20.5
console.log(typeof num1, typeof num2); // number number

/*
    2)String
    -String data type is used to represent text values in JavaScript.
    -Strings are enclosed in single or double quotes.
    -typeOf String is string.
*/
let name = "Dhiraj"; //double quotes
let surname = 'Dhumal'; //single quotes
console.log(name, surname); // Dhiraj Dhumal
console.log(typeof name, typeof surname); // string string

/*
    3)Boolean
    -Boolean data type is used to represent logical values in JavaScript.
    -There are two boolean values: true and false.
    -typeOf Boolean is boolean.
*/
let login = true;
let logout = false;
console.log(login, logout); // true false
console.log(typeof login, typeof logout); // boolean boolean

/*
    4)Undefined
    -Undefined data type is used to represent a variable that has not been assigned a value.
    -When a variable is declared but not initialized, it is assigned the value of undefined.
    -we cannot use const to declare a variable as undefined because const must be initialized at the time of declaration.
    -typeOf Undefined is undefined.
*/
let age;
//const age; // we cannot use const to declare a variable as undefined because const must be initialized at the time of declaration.
console.log(age); // undefined
console.log(typeof age); // undefined

/*
    5)BigInt
    -BigInt data type is used to represent large integers in JavaScript.
    -BigInt can be created by appending n to the end of an integer or by using the BigInt() constructor.
    -typeOf BigInt is bigint.
*/ 
let bigNum = 1234567890123456789012345678901234567890n;
console.log(bigNum); // 1234567890123456789012345678901234567890n
console.log(typeof bigNum); // bigint

/*
    6)Null
    -Null data type is used to represent the intentional absence of any object value.
    -Null is a special value that represents no value.
    -typeOf Null is object. because of a bug in JavaScript, the typeof null returns "object" instead of "null".
*/ 
let weather = null;
console.log(weather); // null
console.log(typeof weather); // object

/*
    7)Symbol
    -Symbol data type is used to represent unique identifiers in JavaScript.
    -Symbols are created using the Symbol() function.
    -typeOf Symbol is symbol.
*/
let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log(sym1 == sym2); // false  because each symbol is unique and different from each other.
console.log(typeof sym1, typeof sym2); // symbol symbol




// 2)Non-Primitives Data Types
/*
    1)Object
    -Object data type is used to represent collections of key-value pairs in JavaScript.
    -Objects are created using curly braces {}.
    -typeOf Object is object.
*/
let person = {
    name: "Dhiraj",
    age: 25,
    city: "Mumbai"
};
console.log(person); // { name: 'Dhiraj', age: 25, city: 'Mumbai' }
console.log(typeof person); // object
    
/*
    2)Array
    -Array data type is used to represent ordered collections of different types of values in JavaScript.
    -Arrays are created using square brackets [].
    -typeOf Array is object.
*/
let fruits = [10, true, null, undefined, "apple", "banana", "orange"];
console.log(fruits); // [10, true, null, undefined, 'apple', 'banana', 'orange']
console.log(typeof fruits); // object

/*
    3)Function
    -Function data type is used to represent reusable blocks of code in JavaScript.
    -Functions are created using the function keyword.
    -Functions can be called using the function name followed by parentheses ().
    -Functions can also be assigned to variables and passed as arguments to other functions.
    -typeOf Function is function.
*/
function greet() {
    console.log("Hello, World!");
}
greet(); // Hello, World!
console.log(typeof greet); // function