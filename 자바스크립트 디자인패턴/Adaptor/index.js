const localStorage = require('./localStorage');


console.log("localStorage length: ", localStorage.length);

var uid = localStorage.getItem("user_id");

console.log("user_id", uid);

if (!uid) {
    console.log('User ID not found. Setting the user id and token...');
    localStorage.setItem("token", "sdgsdglksdglskdgl");
    localStorage.setItem("user_id", "12345");
} else {
    console.log("User ID found", uid);
    console.log("cleaning the User ID");
    localStorage.clear();
}