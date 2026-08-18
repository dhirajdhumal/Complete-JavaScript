/*
    Operators
        -Operators are used to perform operations on variables and values.
        -There are different types of operators in JavaScript, including:
            1) Arithmetic Operators
            2) Assignment Operators
            3) Comparison Operators
            4) Logical Operators
            5) Bitwise Operators
            6) Conditional (Ternary) Operator
*/

/*
    1) Arithmetic Operators
        -Arithmetic operators are used to perform arithmetic operations on numbers.
        -The following are the arithmetic operators in JavaScript:
            - Addition (+)
            - Subtraction (-)
            - Multiplication (*)
            - Division (/)
            - Modulus (%)
            - Exponentiation (**)
*/
console.log("Arithmetic Operators");
console.log("Addition: " + (5 + 3)); // 8
console.log("Subtraction: " + (5 - 3)); // 2
console.log("Multiplication: " + (5 * 3)); // 15
console.log("Division: " + (5 / 3)); // 1.6666666666666667
console.log("Modulus: " + (5 % 3)); // 2
console.log("Exponentiation: " + (5 ** 3)); // 125

/*
    2) Assignment Operators
        -Assignment operators are used to assign values to variables.
        -The following are the assignment operators in JavaScript:
            - Assignment (=)
            - Addition Assignment (+=)
            - Subtraction Assignment (-=)
            - Multiplication Assignment (*=)
            - Division Assignment (/=)
            - Modulus Assignment (%=)
            - Exponentiation Assignment (**=)
*/
console.log("\nAssignment Operators");
let x = 5;
console.log("Assignment: " + x);
x += 3; // equivalent to x = x + 3
console.log("Addition Assignment: " + x);
x -= 2; // equivalent to x = x - 2
console.log("Subtraction Assignment: " + x);
x *= 2; // equivalent to x = x * 2
console.log("Multiplication Assignment: " + x);
x /= 2; // equivalent to x = x / 2
console.log("Division Assignment: " + x);
x %= 3; // equivalent to x = x % 3
console.log("Modulus Assignment: " + x);
x **= 2; // equivalent to x = x ** 2
console.log("Exponentiation Assignment: " + x);

/*
    3) Comparison Operators
        -Comparison operators are used to compare two values and return a boolean value (true or false).
        -The following are the comparison operators in JavaScript:
            - Equal (==) it checks if the values are equal, but not the type.
            - Not Equal (!=)
            - Strict Equal (===) it checks if the values and the type are equal.
            - Strict Not Equal (!==)
            - Greater Than (>)
            - Less Than (<)
            - Greater Than or Equal (>=)
            - Less Than or Equal (<=)
*/
console.log("\nComparison Operators");
console.log("Equal: " + (5 == 5)); // true
console.log("Equal: " + (5 == "5")); // true
console.log("Not Equal: " + (5 != 3)); // true
console.log("Strict Equal: " + (5 === 5)); // true
console.log("Strict Equal: " + (5 === "5")); // false
console.log("Strict Not Equal: " + (5 !== 3)); // true
console.log("Greater Than: " + (5 > 3)); // true
console.log("Less Than: " + (5 < 3));  // false
console.log("Greater Than or Equal: " + (5 >= 5)); // true
console.log("Less Than or Equal: " + (5 <= 5)); // true

/*
    4) Logical Operators
        -Logical operators are used to combine multiple boolean expressions and return a boolean value (true or false).
        -The following are the logical operators in JavaScript:
            - Logical AND (&&)
            - Logical OR (||)
            - Logical NOT (!)   
*/
console.log("\nLogical Operators");
console.log("Logical AND: " + (true && true)); // true
console.log("Logical AND: " + (true && false)); // false
console.log("Logical AND: " + (false && true)); // false
console.log("Logical AND: " + (false && false)); // false
console.log("Logical OR: " + (true || false)); // true
console.log("Logical OR: " + (false || true)); // true
console.log("Logical OR: " + (true || true)); // true
console.log("Logical OR: " + (false || false)); // false    
console.log("Logical NOT: " + (!true)); // false

/*
    5) Bitwise Operators
        -Bitwise operators are used to perform bit-level operations on binary numbers.
        -The following are the bitwise operators in JavaScript:
            - Bitwise AND (&)
                1+1 = 1
                1+0 = 0
                0+1 = 0
                0+0 = 0
            - Bitwise OR (|)
                1+1 = 1
                1+0 = 1
                0+1 = 1
                0+0 = 0
            - Bitwise XOR (^)
                1+1 = 0
                1+0 = 1
                0+1 = 1
                0+0 = 0
            - Bitwise NOT (~)
                1 = 0
                0 = 1
*/
console.log("\nBitwise Operators");
console.log("Bitwise AND: " + (5 & 3)); // 1  how comes 5 = 101 and 3 = 011, so 101 & 011 = 001 which is 1
console.log("Bitwise OR: " + (5 | 3)); // 7  how comes 5 = 101 and 3 = 011, so 101 | 011 = 111 which is 7
console.log("Bitwise XOR: " + (5 ^ 3)); // 6  how comes 5 = 101 and 3 = 011, so 101 ^ 011 = 110 which is 6
console.log("Bitwise NOT: " + (~5)); // -6  how comes 5 = 101, so ~5 = ...110 which is -6

/*
    6) Conditional (Ternary) Operator
        -The conditional (ternary) operator is used to evaluate a condition and return one of two values based on the result of the condition.
        -The syntax of the conditional (ternary) operator is:
            condition ? value_if_true : value_if_false = for single condition
            condition1 ? value_if_true1 : condition2 ? value_if_true2 : value_if_false = for multiple conditions    
            condition1 ? value_if_true1 : condition2 ? value_if_true2 : condition3 ? value_if_true3 : value_if_false = for multiple conditions
*/
console.log("\nConditional (Ternary) Operator");
let age = 20;
let isAdult = age >= 18 ? true : false;
console.log("Is Adult: " + isAdult); // true

let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : score >= 60 ? "D" : "F";
console.log("Grade: " + grade); // B
