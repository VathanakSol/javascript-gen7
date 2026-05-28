// Create Array 
let students = ["Andy", "John", "Sara", "Emily"];

// Modifying Array Elements
students[1] = "Michael"; 

// Methods to add elements
students.push("David");
students.push("Sophia");
students.push("James");
students.push("Olivia");

// Removing the last element from the array
// students.pop();

// Adding an element at the beginning of the array
students.unshift("Karen");

// console.log(students);

// DOM 
function displayStudents(){
    countStudents();
}

function countStudents(){
    const list = document.querySelector("#show-list")
    students.forEach((student) => {
        list.innerHTML += `<li>${student}</li>`;
    })
}

displayStudents();

// For loop : use repeat task specified number of times
// for(starter; condition; update){
//     // statement
// }

// for(let i = 0; i < students.length; i++){
//     console.log(`students ${i}: ${students[i]}`);
// }

// Foreach loop : use to iterate over array elements
// students.forEach((student) => {
//     console.log(student);
// })

