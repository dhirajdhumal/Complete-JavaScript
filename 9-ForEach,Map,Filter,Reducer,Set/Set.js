/* 
    Set
        - A Set is a collection of unique values. It can hold any value of any data type, whether primitive values or object references.
        - A value in the Set may only occur once; it is unique in the Set's collection.
        - The Set object lets you store unique values of any type, whether primitive values or object references.
        - The Set object is a collection of values. You can iterate through the elements of a set in insertion order. A value in the Set may only occur once;
        - it is unique in the Set's collection. You can use a Set to store unique values of any type, whether primitive values or object references.      
*/

const arr = [1,2,3,4,5,5,6,7,8,9,9,10];

const uniqueSet = new Set(arr);
console.log(uniqueSet);

console.log(uniqueSet.size);

uniqueSet.add(11);
console.log(uniqueSet);

uniqueSet.delete(5);
console.log(uniqueSet);

console.log(uniqueSet.has(5));

uniqueSet.clear();
console.log(uniqueSet);

const email = ["john@example.com", "jane@example.com", "john@example.com"];
const uniqueEmails = [...new Set(email)]; //used spread operator here to store the unique values in an array
console.log(uniqueEmails);

const s1 = new Set(email);
for(let email of s1){
    console.log(email);
}