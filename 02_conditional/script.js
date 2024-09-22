const inputBox = document.getElementById("inputBox");

const myId = "name";

function handleSubmit(e) {
    e.preventDefault();
    const inputValue = inputBox.value;
    if (inputValue === myId) {
        alert("Successfully logged in");
    } else {
        alert("Please give a valid ID");
    }
}
