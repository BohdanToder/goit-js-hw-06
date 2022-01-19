const guestName = document.querySelector('#name-input');
const helloName = document.querySelector('#name-output');
const defaultName = "Anonymous";

guestName.addEventListener("input", () => {
    if (guestName.value !== "") {
        helloName.textContent = guestName.value;
    } else {
        helloName.textContent = defaultName;
    }
});