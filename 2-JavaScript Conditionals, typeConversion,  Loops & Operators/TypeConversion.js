/*
    Type Conversion in JavaScript
    - Type conversion is the process of converting a value from one data type to another.
    - JavaScript provides several methods for type conversion, including:
        - String() - Converts a value to a string.
        - Number() - Converts a value to a number.
        - Boolean() - Converts a value to a boolean.
        - null conversions -
        - parseInt() - Converts a string to an integer.
        - parseFloat() - Converts a string to a floating-point number.
    - Type conversion can also be done implicitly, where JavaScript automatically converts a value to the required type based on the context.
        - For example, when using the + operator with a string and a number, JavaScript will convert the number to a string and concatenate the two values.
        
*/
console.log("Type Conversion");

/*
    1) Number Conversions 
        - The Number() function can be used to convert a value to a number.
*/
console.log("\nNumber Conversions");
console.log("String to Number: " + Number("123")); // 123
console.log("String to Number: " + Number("Hello")); // NaN
console.log("String to Number: " + Number("123abc")); // NaN
console.log("Empty String to Number: " + Number("")); // 0

console.log("Boolean to Number: " + Number(true)); // 1
console.log("Boolean to Number: " + Number(false)); // 0

console.log("Null to Number: " + Number(null)); // 0
console.log("Undefined to Number: " + Number(undefined)); // NaN

console.log("Array to Number: " + Number([1, 2, 3])); // NaN
console.log("Object to Number: " + Number({})); // NaN  

console.log("String with spaces to Number: " + Number(" 123 ")); // 123
console.log("String with spaces to Number: " + Number(" 123abc ")); // NaN
console.log("String with spaces to Number: " + Number(" 123.45 ")); // 123.45
console.log("String with spaces to Number: " + Number(" 123.45abc ")); // NaN

/*
    2) String Conversions
        - The String() function can be used to convert a value to a string.
*/
console.log("\nString Conversions");
console.log("Number to String: " + String(123)); // "123"
console.log("BigInt to String: " + String(123n)); // "123"

console.log("Boolean to String: " + String(true)); // "true"
console.log("Boolean to String: " + String(false)); // "false"

console.log("Null to String: " + String(null)); // "null"
console.log("Undefined to String: " + String(undefined)); // "undefined"

console.log("Array to String: " + String([1, 2, 3])); // "1,2,3"
console.log("Object to String: " + String({})); // "[object Object]"
console.log("Function to String: " + String(function() {})); // "function() {}"

console.log("Date to String: " + String(new Date())); // "Mon Jun 10 2024 12:00:00 GMT+0000 (Coordinated Universal Time)"
console.log("Symbol to String: " + String(Symbol("symbol"))); // "Symbol(symbol)"

/*
    3) Boolean Conversions
        - The Boolean() function can be used to convert a value to a boolean.
*/
console.log("\nBoolean Conversions");
console.log("Number to Boolean: " + Boolean(1)); // true
console.log("Number to Boolean: " + Boolean(123)); // true 
console.log("Number to Boolean: " + Boolean(" ")); // true
console.log("String to Boolean: " + Boolean("Hello")); // true

console.log("Number to Boolean: " + Boolean(0)); // false  
console.log("String to Boolean: " + Boolean("")); // false
console.log("Null to Boolean: " + Boolean(null)); // false
console.log("Undefined to Boolean: " + Boolean(undefined)); // false    

console.log("Array to Boolean: " + Boolean([1, 2, 3])); // true
console.log("Object to Boolean: " + Boolean({})); // true

console.log("NaN to Boolean: " + Boolean(NaN)); // false
console.log("Symbol to Boolean: " + Boolean(Symbol("symbol"))); // true

/*
    4) pareseInt() and parseFloat()
        - The parseInt() function can be used to convert a string to an integer.
        - The parseFloat() function can be used to convert a string to a floating-point number.
        - Both functions ignore leading and trailing whitespace, and stop parsing when they encounter a character that is not a valid digit.
*/
console.log("\nparseInt() and parseFloat()");
console.log("parseInt('123'): " + parseInt("123")); // 123
console.log("parseInt('123abc'): " + parseInt("123abc")); // 123
console.log("parseInt('abc123'): " + parseInt("abc123")); // NaN
console.log("parseInt('123.45'): " + parseInt("123.45")); // 123

console.log("parseFloat('123.45'): " + parseFloat("123.45")); // 123.45
console.log("parseFloat('123.45abc'): " + parseFloat("123.45abc")); // 123.45
console.log("parseFloat('abc123.45'): " + parseFloat("abc123.45")); // NaN
console.log("parseFloat('123'): " + parseFloat("123")); // 123

/*
    null conversions
        - null is a special value in JavaScript that represents the absence of any object value.
        - null is loosely equal to undefined, but not strictly equal.
        - When null is converted to a number, it becomes 0.
        - When null is converted to a string, it becomes "null".
        - When null is converted to a boolean, it becomes false.

        - >,<,>=,<= (null -> number, null is converted to 0)
*/
console.log("\nnull conversions");
console.log(null == undefined); // true 
console.log(null === undefined); // false
console.log(null == 0); // false
console.log(null === 0); // false
console.log(null == ""); // false
console.log(null === ""); // false

console.log(null>=0); // true
console.log(null>0); // false
console.log(null<=0); // true
console.log(null<0); // false
console.log(null>undefined); // false null=0; undefined=NaN;

/*
    5) Implicit Type Conversion
        - JavaScript automatically converts a value to the required type based on the context.
        - This is known as implicit type conversion or type coercion.
        - For example, when using the + operator with a string and a number, JavaScript will convert the number to a string and concatenate the two values.
*/
console.log("\nImplicit Type Conversion");
let x = 5;
let y = "10";
console.log("x + y: " + (x + y)); // "510"  because here we are adding a number and a string so it converts the number to a string and concatenates the two values.
console.log("x - y: " + (x - y)); // -5  because here we are subtracting a string from a number so it converts the string to a number and subtracts the two values.
console.log("x * y: " + (x * y)); // 50  because here we are multiplying a number and a string so it converts the string to a number and multiplies the two values.
console.log("x / y: " + (x / y)); // 0.5  because here we are dividing a number by a string so it converts the string to a number and divides the two values.
console.log("y + x: " + (y + x)); // "105"  because here we are adding a string and a number so it converts the number to a string and concatenates the two values.
console.log("y - x: " + (y - x)); // 5  because here we are subtracting a number from a string so it converts the string to a number and subtracts the two values.

console.log("x + true: " + (x + true)); // 6  because here we are adding a number and a boolean so it converts the boolean to a number and adds the two values.
console.log("x + false: " + (x + false)); // 5  because here we are adding a number and a boolean so it converts the boolean to a number and adds the two values.

console.log("x + null: " + (x + null)); // 5  because here we are adding a number and null so it converts null to a number and adds the two values.
console.log("x + undefined: " + (x + undefined)); // NaN  because here we are adding a number and undefined so it converts undefined to a number and adds the two values which results in NaN.

console.log("x + []: " + (x + [])); // "5"  because here we are adding a number and an empty array so it converts the empty array to a string and concatenates the two values.
console.log("x + [1, 2, 3]: " + (x + [1, 2, 3])); // "51,2,3"  because here we are adding a number and an array so it converts the array to a string and concatenates the two values.

console.log("x + {}: " + (x + {})); // "5[object Object]"  because here we are adding a number and an object so it converts the object to a string and concatenates the two values.
console.log("x + function() {}: " + (x + function() {})); // "5function() {}"  because here we are adding a number and a function so it converts the function to a string and concatenates the two values.

console.log("x + new Date(): " + (x + new Date())); // "5Mon Jun 10 2024 12:00:00 GMT+0000 (Coordinated Universal Time)"  because here we are adding a number and a date so it converts the date to a string and concatenates the two values.

console.log("true + null: " + (true + null)); // 1  because here we are adding a boolean and null so it converts the boolean to a number and adds the two values.