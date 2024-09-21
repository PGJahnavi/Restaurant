// script.js

const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Here you would typically send the username and password to your server for authentication
    // For now, we'll just simulate a successful login
    console.log('Username:', username);
    console.log('Password:', password);

    alert('Login successful!');

    // Redirect to the main restaurant page or dashboard after successful login
    // window.location.href = 'restaurant-page.html';
});