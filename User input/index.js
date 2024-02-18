// let price = 10.99;

// document.getElementById("myheader").textContent = "hello";
// document.getElementById("paragraph").textContent = `pizza price: ${price}`;

let username;

document.getElementById("submit").onclick = function(){
    username = document.getElementById("text").value;
    document.getElementById("myheader").textContent = `Hello ${username}`
}