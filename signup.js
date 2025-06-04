document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var fullName = document.getElementById("input-name").value;
    var email = document.getElementById("input-id").value;
    var password = document.getElementById("input-password").value;

    var existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    var userExists = existingUsers.some(user => user.email === email);

    if (userExists) {
        document.getElementById("signupMessage").innerText = "Email already in use. Please use a different email.";
    } else {
        var newUser = {
            "full_name": fullName,
            "email": email,
            "password": password
        };

        existingUsers.push(newUser);
        localStorage.setItem('users', JSON.stringify(existingUsers));

        window.location.href = "login.html";
    }
});