document.getElementById("submit-btn").addEventListener("click", function() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    if (name !== "" && email !== "" && message !== "") {
        alert("Message sent!");
    } else {
        alert("Please enter all values.");
    }
});