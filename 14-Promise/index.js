    /*
        Promise
            -Promise is a JavaScript object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
            -A Promise is a Object that stores a future result of an asynchronous operation.
            -A Promise has three states: pending, fulfilled, and rejected.
                1)Pending: The initial state of a Promise. The operation has not completed yet.
                2)Fulfilled: The operation completed successfully, and the Promise has a resulting value.
                3)Rejected: The operation failed, and the Promise has a reason for the failure.

        Fetch API
            -The Fetch API is a modern interface that allows you to make HTTP requests to servers from web browsers.
            -It provides a more powerful and flexible way to work with asynchronous requests compared to older methods like XMLHttpRequest.

        Fetch function
            -The fetch() function is a built-in JavaScript function that allows you to make network requests to retrieve resources from a server.
            -it returns a Promise because it is an asynchronous operation that may take some time to complete, and the Promise represents the eventual completion (or failure) of that operation.
            -The fetch() function is used to make HTTP requests to a server and retrieve data, such as JSON, text, or other resources.
            -The fetch() function is a modern replacement for the older XMLHttpRequest object, providing a more powerful and flexible way to work with asynchronous requests.
            -The fetch() function is part of the Fetch API, which is a modern interface that allows you to make HTTP requests to servers from web browsers.
            -The fetch() function is supported in all modern browsers, including Chrome, Firefox, Safari, Edge, and Opera.
            -The fetch() function is not supported in Internet Explorer.

        json - JavaScript Object Notation
            .json()
            -this is also a asynchronous task 
            -we convert the response to json format using the .json() method of the Response object.
            -we can convert javascript object to json format using the JSON.stringify() method.
                -example:
                    const obj = { name: "Dhiraj", age: 25 };
                    const json = JSON.stringify(obj);
                    -output: {"name":"Dhiraj","age":25}
            -we can convert json format to javascript object using the JSON.parse() method.
                -example:
                    const json = '{"name":"Dhiraj","age":25}';
                    const obj = JSON.parse(json);
                    -output: { name: "Dhiraj", age: 25 }
            -also using the .json() method of the Response object we can convert the response to json format.
                -example:
                    fetch("https://jsonplaceholder.typicode.com/posts")
                    .then((response)=> {
                        return response.json();
                    }).then((data)=> {
                        console.log(data);
                    }
                        -output: [{userId: 1, id: 1, title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit", body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"},{},...] 
                

        Diff between json and javascript object
            -JSON is a text-based/string data format that is used to represent structured data
            -most of languages knows json but not all languages knows javascript object

            -JavaScript object is a data structure that is used to store and manipulate data in JavaScript.

        catch()
            -The catch() method is used to handle errors that may occur during the execution of a Promise.

        finally()
            -The finally() method is used to execute code after a Promise has been settled, regardless of whether it was fulfilled or rejected.
            -example: loading a page, we can use the finally() method to hide the loading spinner after the Promise has been settled, regardless of whether it was fulfilled or rejected.
    */


    console.log("-----Hello Dhiraj!");



    // const p1 = fetch("https://jsonplaceholder.typicode.com/posts");
    // // console.log(p1); /* Promise { <pending> }   because fetch() is an asynchronous function that returns a promise. */

    // const p2 = p1.then((response)=> {
    //     return  response.json(); /* Response {type: 'cors', url: 'https://jsonplaceholder.typicode.com/posts', redirected: false, status: 200, ok: true, …}   because the promise is fulfilled and the response is returned. */
    // })

    // p2.then((response)=> {
    //     console.log(response);
    // })

    // const p1 = fetch("https://jsonplaceholder.typicode.com/posts")
    // .then((response)=> {
    //     if(!response.ok){
    //         throw new Error("Data not found");
    //     }
    //     return response.json();
    // })
    // .then((data)=> { 
    //     console.log(data);
    //     const parent = document.getElementById("first");
    //     for(let i=0; i<data.length; i++){
         
    //     const para = document.createElement('p');
    //     para.textContent = data[i].body;
    //     para.style.backgroundColor = "lightblue";
    //     para.style.margin = "10px";
    //     para.style.padding = "10px";

    //     parent.append(para);
    //     }
    // }).catch((error)=> {
    //     const parent = document.getElementById("first");
    //     parent.textContent = "Error: " + error.message;
    // });


    
    // console.log("-----Hello Dhiraj! Bye");


    //Promise Creation
    const promise1 = new Promise((resolve, reject)=> {
        reject("Promise is rejected");
    })
    promise1.then((respose)=> {
        console.log(respose); /* Promise is resolved   because the promise is resolved and the value is returned. */
    }).catch((error)=> {
        console.log(error);
    })
