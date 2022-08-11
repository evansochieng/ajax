const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});


// Try these for exercise on AJAX
let response = await fetch('https://randomuser.me/api/');

let file = await response.json();

// Get the object with the data we want
let content = file.results[0]; //We get a nested object

// Get name
let name = content.name.title + ' ' + content.name.first + ' ' + content.name.last;

// Get email 
let email = content.email

// Create a function to do all these
// let fetchName = function(){
//   let response = await fetch('https://randomuser.me/api/');
//   let file = await response.json();
//   let content = file.results[0]; //We get a nested object
//   let name = content.name.title + ' ' + content.name.first + ' ' + content.name.last;
//   return name
// }

// Add an event listener to the button
// I want it to append name and email when clicked
let button = document.getElementsByClassName("btn btn-primary")[0];

let fullnameLabel = document.getElementsByTagName('label')[0]

button.addEventListener('click', function(){
  // let response = await fetch('https://randomuser.me/api/');
  // let file = await response.json();
  // let content = file.results[0]; //We get a nested object
  // let name = content.name.title + ' ' + content.name.first + ' ' + content.name.last;

  fullnameLabel.innerText += name;
  
})