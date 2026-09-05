/*
    Event
        - An event is an action that occurs in the browser, often as a result of user interaction. 
          Examples of events include clicking a button, moving the mouse, pressing a key, or loading a page.

    Event Listener
        - An event listener is a function that waits for a specific event to occur on a particular element. 
          When the event occurs, the event listener executes a specified function.

    Eveny Action
        - An event action is the specific behavior or response that occurs when an event is triggered. 
          It can be a function that modifies the DOM, updates data, or performs any other action in response to the event.  
*/

// function handleClick(){
//     const element = document.getElementById("h1");
//     element.textContent = "Hey Jay, Kahi nahi";
// }

// const element = document.getElementById("h1");
// element.onclick = function handleClick(){
//     element.textContent = "Hey Jay, Kahi nahi";
// }

// element.addEventListener('mouseleave', () =>{
//     element.textContent = "DHiraj is Practising Coding"
// })

// element.addEventListener('mouseenter', () =>{
//     element.style.backgroundColor = "Pink"
// })

// const child1 = document.getElementById("child1");

// child1.addEventListener('click', () => {
// //     child1.textContent = "I am Clicked"
// })

const parent = document.getElementById("parent");

function handleClick(e){ 
    e.target.textContent = "I am Clicked";
    parent.removeEventListener('click', handleClick);
}

parent.addEventListener('click', handleClick);



// const grandparent = document.getElementById("grandparent");

// grandparent.addEventListener("click", (e) => {
//     console.log(e.target);
// //   console.log("Grandparent is clicked");
// });

// const parent = document.getElementById("parent");

// parent.addEventListener("click", (e) => {
//     // console.log(e);
// //   console.log("parent is clicked");
// });

// const child = document.getElementById("child");

// child.addEventListener("click", (e) => {
//     // console.log(e); 
//     // e.stopPropagation();
// //   console.log("child is clicked");
// });
