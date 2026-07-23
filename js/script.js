// Display a welcome message
function showMessage() {
    alert("Welcome to DevShop!");
}
 
// Simulate adding a product to the cart
function addCart() {
    alert("Product added to cart successfully!");
}
 
// Contact form button
function contactMessage() {
    alert("Thank you! Your message has been sent.");
}
 
// Login button
function login() {
 
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
 
    if (username === "" || password === "") {
        alert("Please enter both username and password.");
    } else {
        alert("Login Successful!");
    }
 
}

