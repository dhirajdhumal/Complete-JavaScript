function fetchUserData(callback) {
  console.log("Fetching user data");
  setTimeout(() => {
    const object = {
      id: 101,
      name: "Dhiraj",
      role: "Developer",
    };
    callback(object);
  }, 2000);
}

function displayuserData(object) {
  console.log(object.name);
  console.log(object.role);
}

fetchUserData(displayuserData);
console.log("Request sent!");
