const button = document.getElementById('clickButton');
const uname = document.getElementById('input-username');
const username = document.getElementById('username');

// Add event listener for the button click
button.addEventListener("click", () => {
    const value = uname.value;
    console.log(value);
    localStorage.setItem("name", value);
    location.reload(); // Reload the page to display the updated name
});

// Load the name from localStorage when the page loads
window.addEventListener("load", () => {
    const value = localStorage.getItem("name");
    if (value) {
        username.innerText = value;
    }
});
