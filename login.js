document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    // Simple demo login (you can change credentials)
    const correctUsername = "admin";
    const correctPassword = "1234";

    if (username === correctUsername && password === correctPassword) {
        message.style.color = "green";
        message.textContent = "Login successful! Redirecting...";

        // Redirect after login
        setTimeout(() => {
            window.location.href = "index1.html"; // change to your homepage
        }, 1500);

    } else {
        message.style.color = "red";
        message.textContent = "Invalid username or password";
    }
});