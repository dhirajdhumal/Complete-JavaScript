// let newElement = document.createElement("h2");
// newElement.textContent = "My name is Dhiraj";
// newElement.id = "second";
// console.log(newElement);

// const element = document.getElementById("first");
// element.before(newElement)

// const newElement2 = document.createElement("h3");
// newElement2.textContent = "My name is Adesh";
// newElement2.id = "third";
// newElement2.className = "fourth";
// newElement2.classList.add("fifth");
// newElement2.classList.add("seixth");
// newElement2.classList.remove("fifth");
// console.log(newElement2);

// newElement2.style.color = "blue";
// newElement2.style.backgroundColor = "yellow";
// newElement2.setAttribute("title", "This is a title");

// element.after(newElement2);

// const list = document.createElement("li");
// list.textContent = "Dhiraj";

// const list2 = document.createElement("li");
// list2.innerText = "Kausalya";

// const list3 = document.createElement("li");
// list3.innerHTML = "Jay";

// const list4 = document.createElement("li");
// list4.innerHTML = "Adesh";

// const unorderdList = document.getElementById("listings");
// unorderdList.append(list, list2);
// unorderdList.prepend(list3);

// list.after(list4);
// unorderdList.children[3].after(list)

// How to show backend or api data on UI
// let data = ["jira", "haldi", "mug", "vatana", "dal", "salt", "pudina"];
// const unorderdList = document.getElementById("listings");
// let arr = [];
// for (let i of data) {
//   const list = document.createElement("li");
//   list.textContent = i;
//   arr.push(list);
// }
// unorderdList.append(...arr);

// const s1 = document.getElementById("first");
// s1.remove();


const numberList = document.getElementById("NumberList");
console.log(numberList.children);

const lister = document.createElement("list");
lister.textContent = "help";

numberList.insertAdjacentElement("beforebegin", lister)