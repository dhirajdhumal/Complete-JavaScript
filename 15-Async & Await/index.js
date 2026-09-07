/*
    Async & Await

    1)Async
        -The async is a keyword 
        -The async keyword used is used to make a function asynchronous.
        -The async function always return a promise.
        -The async function can be used with the await keyword to wait for a promise to resolve.

    2)Await
        -The await is a keyword
        -The await keyword is used to wait for a promise to resolve.
        -The await keyword can only be used inside an async function.
        -we only use wait inside an async function because if we write await outside an async function then it will freeze the other code and it will not execute the other code until the promise is resolved.

    3)Finally
        -The finally() method is used to execute code after a Promise has been settled, regardless of whether it was fulfilled or rejected.
        -example: loading a page, we can use the finally() method to hide the loading spinner after the Promise has been settled, regardless of whether it was fulfilled or rejected.
    
    4)Promise.all()
        -The Promise.all() method is used to wait for all the promises to be resolved or rejected.
        -The Promise.all() method takes an array of promises as an argument and returns a single promise that resolves when all of the promises in the array have resolved or rejects with the reason of the first promise that rejects.
        -example: we can use the Promise.all() method to wait for multiple API calls to be completed before rendering the data on the page.
*/

// async function greet(){
//     return "Dhiraj Dhumal";
// }

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((response)=> {
//     return response.json();
// })
// .then((data)=> {
//     console.log(data);
// })

//here is the one problem because if we run this code it will wait for result and then and then console.log will print the result but if we want to print the result first and then wait for the result then we can use async and await.
// const response = await fetch("https://jsonplaceholder.typicode.com/posts");
// const data = await response.json();
// console.log(data);

// console.log("-----Hello Dhiraj! Bye");
const parent = document.getElementById("first");
async function getData() {
  try {
    let response = await fetch("https://jsonlaceholder.typicode.com/posts");
    if(response.ok === false){
        throw new Error("Data not found");
    }
    let data = await response.json();
    console.log(data);
    for (let user of data) {
      const element = document.createElement("div");
      element.classList.add("user");
      console.log(user);

      const title = document.createElement("h2");
      title.textContent = user.title;

      element.append(title);
      parent.append(element);
    }
  } catch (error) {
    console.log(error);
  }
}
getData();
