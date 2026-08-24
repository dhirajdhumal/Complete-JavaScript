// Closure
/*
    Closure
        - A function that remembers variables from its outer scope even after the outer function has finished executing.
        - A closure is a function that has access to its own scope, the outer function's scope, and the global scope.
        - A closure is created when a function is defined inside another function and the inner function has access to the outer function's variables.
        - A closure is created when a function is returned from another function and the returned function has access to the outer function's variables.
*/

// function createCounter() {
//     let count = 0;
//     function counter() {
//         count++;
//         return count;
//     }
//     return counter;
// }
// console.log(createCounter()); // [Function: counter]
// const myCounter = createCounter();
// console.log(myCounter()); // 1
// console.log(myCounter()); // 2
// console.log(myCounter()); // 3




//Closure for private variables
function createBankAccount(){
    let balance = 500;
    const user = {
        deposit: function(amount){
            if(typeof amount === 'number' && amount > 0){
                balance += amount;
                return balance;
            }
        },
        withdraw: function(amount){
            if(typeof amount === 'number' && amount > 0 && amount <= balance){
                balance -= amount;
                return balance;
            }
        },
        getBalance: function(){
            return balance;
        }
    }
    return user;
}

const customer1 = createBankAccount();
console.log(customer1.withdraw(100)); // 400
console.log(customer1.getBalance()); // 400
