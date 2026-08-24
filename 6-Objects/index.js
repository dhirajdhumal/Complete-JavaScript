/*
    Objects
        -Objects are a collection of key value pairs.
        -Each key in an object is a string (or Symbol) and is associated with a value.
        -Objects are mutable, meaning that you can change their properties after they have been created.
        -They are used to store structured data and more complex entities.
        -Objects can be created using object literals, the Object constructor, or classes.
            1. Object Literals:
                -This is the most common way to create an object in JavaScript.
                -It involves defining an object with a set of key-value pairs enclosed in curly braces.
                -Example: let person = {name: "John", age: 30, city: "New York"};
            
            2. Object Constructor:
                -You can create an object using the Object constructor.
                -Example: let person = new Object();
                
            3. Classes:
                -Classes are a blueprint for creating objects.
                -They allow you to define properties and methods that will be shared by all instances of the class.
                -Example:
                    class Person {
                        constructor(name, age) {
                            this.name = name;
                            this.age = age;
                        }
                    }
        -it is accessed using dot notation or bracket notation.
            1. Dot Notation:
                -You can access the properties of an object using dot notation.
                -Example: console.log(person.name);
            
            2. Bracket Notation:
                -You can also access the properties of an object using bracket notation.
                -Example: console.log(person["name"]);

        -objects can have methods, which are functions that are associated with the object.
            1. Defining Methods:
                -You can define methods within an object using function expressions or arrow functions.
                -Example:
                    let person = {
                        name: "John",
                        age: 30,
                        greet: function() {
                            console.log("Hello, my name is " + this.name);
                        }
                    };

            2. Calling Methods:
                -You can call methods of an object using dot notation.
                -Example: person.greet();
        
        -Objects can be nested, meaning that an object can contain other objects as properties.
            -Example:
                let person = {
                    name: "John",
                    age: 30,
                    address: {
                        street: "123 Main St",
                        city: "New York",
                        state: "NY"
                    }
                };

        -Objects can be iterated over using for...in loops or Object.keys(), Object.values(), and Object.entries() methods.
            1. for...in Loop:
                -You can use a for...in loop to iterate over the properties of an object.
                -Example:
                    for (let key in person) {
                        console.log(key + ": " + person[key]);
                    }

            2. Object.keys(), Object.values(), and Object.entries():
                -You can use Object.keys() to get an array of the object's keys, Object.values() to get an array of the object's values, and Object.entries() to get an array of the object's key-value pairs.
                -Example:
                    console.log(Object.keys(person));   
                    output: ["name", "age", "address"]
                
                    console.log(Object.values(person));
                    output: ["John", 30, {street: "123 Main St", city: "New York", state: "NY"}]

                    console.log(Object.entries(person));
                    output: [["name", "John"], ["age", 30], ["address", {street: "123 Main St", city: "New York", state: "NY"}]]
        
        -Objects can be cloned or copied using Object.assign() or the spread operator.
            1. Object.assign():
                -You can use Object.assign() to create a shallow copy of an object.
                -Example:
                    let personCopy = Object.assign({}, person);
                    
            2. Spread Operator:
                -You can use the spread operator to create a shallow copy of an object.
                -Example:
                    let personCopy = {...person};

        -Objects can be compared using strict equality (===) or by comparing their properties.
            1. Strict Equality:
                -Two objects are considered equal if they reference the same object in memory.
                -Example:
                    let obj1 = {name: "John"};
                    let obj2 = {name: "John"};
                    console.log(obj1 === obj2); // false

            2. Comparing Properties:
                -You can compare the properties of two objects to determine if they are equal.
                -Example:
                    function areObjectsEqual(obj1, obj2) {
                        let keys1 = Object.keys(obj1);
                        let keys2 = Object.keys(obj2);
                        if (keys1.length !== keys2.length) {
                            return false;
                        }
                        for (let key of keys1) {
                            if (obj1[key] !== obj2[key]) {
                                return false;
                            }
                        }
                        return true;
                    }
*/

/* CRUD Operations */ 

//we can create an object using object literal syntax
const user = {
    name: "Dhiraj",
    age: 22,
    emailId: "dhirajdh9421@gmail.com",
    amount: 1000,
}

console.log(user); //{ name: 'Dhiraj', age: 22, emailId: 'dhirajdh9421@gmail.com', amount: 1000 }
console.log(typeof user); //object

//how to access the properties of an object using dot notation and bracket notation
console.log("Accessing properties of an object");
console.log(user.name); //using dot notation
console.log(user["name"]); //using bracket notation. because key is stores in string format so we can access it using bracket notation as well.

//how to add a new property to an object
console.log("Adding new properties to an object");
user.gender = 'Male';
user["city"] = 'Pune';
console.log(user); 

//how to update the value of an existing property
console.log("Updating the value of an existing property");
user.age = 23;
user["amount"] = 2000;
console.log(user);

//how to delete a property from an object
console.log("Deleting a property from an object");
delete user.emailId;
console.log(user);


/* Object Copying by Reference*/
console.log("Object Copying by Reference");
const product ={
    name: 'Laptop',
    price: 50000,
    brand: 'Dell',
}
console.log(product);

const product2 = product;
console.log(product2);

product2.price = 60000;
console.log(product);
console.log(product2);


/* Shallow Copy - it creates a new object with the same properties */
console.log("Shallow Copy");
const product3 = {...product};
console.log(product3);

product3.price = 70000;
console.log(product);
console.log(product3);


/* Object Methods 
        1) Object.keys() - returns an array of the object's keys
        2) Object.values() - returns an array of the object's values
        3) Object.entries() - returns an array of the object's key-value pairs
*/
console.log("Object Methods");
const person = {
    name: "Dhiraj",
    age: 22,
    emailId: "dhirajdh9421@gmail.com",
    city: "Pune",
}

console.log(Object.keys(person)); //["name", "age", "emailId"]
console.log(Object.values(person)); //["Dhiraj", 22, "dhirajdh9421@gmail.com"]
console.log(Object.entries(person)); //[["name", "Dhiraj"], ["age", 22], ["emailId", "dhirajdh9421@gmail.com"]]


// Looping through an object using for...in loop
console.log("Looping through an object using for...in loop");
for (let keys in person) {
    console.log(keys);
}

for (let keys in person) {
    console.log(person[keys]);
}

for (let keys in person) {
    console.log(keys + ": " + person[keys]);
}

/* for of loop
    -we only use for of loop with iterable objects like arrays, strings, maps, sets etc. but not with objects.
    -we use for of loop with objects by using Object.keys(), Object.values() or Object.entries() methods.
*/
console.log("Looping through an object using for...of loop");
const arr = Object.keys(person);
for (let keys of arr) {
    console.log(keys);
}
const arr2 = Object.values(person);
for (let values of arr2) {
    console.log(values);
}
const arr3 = Object.entries(person);
for (let entries of arr3  ) {
    console.log(entries);
}

// here we can also use destructuring to get the key and value from the entries array
for (let [key, value] of Object.entries(person)) {
    console.log(key + ": " + value);
}



/* Destructuring an object */
console.log("Destructuring an object");
const {name, age, ...otherDetails} = person;    
console.log(name,age, otherDetails); //Dhiraj 22 { emailId: 'dhirajdh9421@gmail.com', city: 'Pune' }

//here we can also rename the variables while destructuring an object
const {name: personName, age: personAge, ...otherDetails2} = person;
console.log(personName, personAge, otherDetails2); //Dhiraj 22 { emailId: 'dhirajdh9421@gmail.com', city: 'Pune' }

/* create functions inside an object */
console.log("create functions inside an object");
const student = {
    name: "Dhiraj",
    age: 22,
    greet: function() {
        console.log("Hello, my name is " + this.name);  //here this refers to the current object
        console.log(`My age is ${this.age}`); //here this refers to the current object
        return 35;
    }
}
student.greet(); //Hello, my name is Dhiraj

console.log(student.greet()); //Hello, my name is Dhiraj 35

/* Nested Objects */
console.log("Nested Objects");
const employee = {
    name: "Dhiraj",
    age: 22,
    address: {
        street: "123 Main St",
        city: "Pune",
        state: "MH"
    }
}
console.log(employee.address.city); //Pune