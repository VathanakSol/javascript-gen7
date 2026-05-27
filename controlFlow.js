// const showText = document.getElementById("box")
//         .innerHTML = `
//             <button class="btn">This is button</button>
//         `

// let day = "Sunday";

// const showText = document.getElementById("box")

// if(day == "Monday"){
//     showText.innerHTML = `<p class="text-green-400">Today is Monday</p>`
// }else if(day == "Tuesday"){
//     showText.innerHTML = `<p class="text-green-400">Today is Tuesday</p>`
// }else {
//     showText.innerHTML = `<p class="text-red-400">Today is not ${day}</p>`
// }

let color = "orange";
const output = document.getElementById("box")

switch(color){
    case "blue":
        output.innerHTML = `<p class="text-blue-500 font-semibold">Blue Status</p>`;
        break;
    case "red":
        output.innerHTML = `<p class="text-red-500 font-semibold">Red Status</p>`;
        break;
    case "green":
        output.innerHTML = `<p class="text-green-500 font-semibold">Green Status</p>`;
        break;
    default:
        output.innerHTML = `<p>INVALID COLOR</p>`;
}











// if(status){
//     showText.innerHTML = `<p class="text-green-400">Status is true</p>`
// }else{
//     showText.innerHTML = `<p class="text-red-400">Status is false</p>`
// }








// if(condition){
    
// }else if(condition){

// }else{

// }
