// document.querySelector(".form-container").addEventListener("submit", function (event) {
//     event.preventDefault();

//     var userId = document.getElementById("input-id").value;
//     var password = document.getElementById("input-password").value;

//     var validCredentials = {
//         "admin@carro.com": "admin",
//         "user@gmail.com": "user"
//     };

//     if (validCredentials.hasOwnProperty(userId)) {
//         if (validCredentials[userId] === password) {
//             switch (userId) {
//                 case "admin@carro.com":
//                     window.location.href = "admin.html";
//                     break;
//                 case "user@gmail.com":
//                     window.location.href = "index-logged.html";
//                     break;
//                 default:
//                     break;
//             }
//         } else {
//             document.getElementById("loginMessage").innerText = "Invalid user ID or password. Please try again.";
//         }
//     } else {
//         document.getElementById("loginMessage").innerText = "Invalid user ID or password. Please try again.";
//     }
// });


document.querySelector(".form-container").addEventListener("submit", function (event) {
    event.preventDefault();

    var userEmail = document.getElementById("input-id").value;
    var password = document.getElementById("input-password").value;

    var existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    var userData = existingUsers.find(user => user.email === userEmail);

    if (userData) {
        if (userData.password === password) {
            localStorage.setItem('loggedInUser', JSON.stringify(userData));
            if (userData.email.endsWith("@carro.com")) {
                window.location.href = "admin.html";
            } else {
                window.location.href = "index-logged.html";
            }
        } else {
            document.getElementById("loginMessage").innerText = "Invalid password. Please try again.";
        }
    } else {
        document.getElementById("loginMessage").innerText = "User not found. Please sign up first.";
    }
});