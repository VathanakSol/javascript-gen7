// function 
function showMessage(){
    console.log("Hello World");
} 

// function with parameter
function greetMessage(name, age){
    console.log(`Hello ${name} and year is ${age}`)
}

// Call the function
// Arguments
// greetMessage("Cambodia", 18); 

function previewMessage(name){
    const previewText = document.querySelector("#screen")
    previewText.textContent = `Welcome to JavaScript`;
}

// previewMessage("Latest Update!!!");

function calculateProductPrice(price, item){
    const totalPrice = price * item;
    return totalPrice;
}

console.log(calculateProductPrice(1.99, 5));





