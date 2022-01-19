const inputEmail = document.querySelector('input[type=email]');
const inputPassword = document.querySelector('input[type=password]');
const formRef = document.querySelector('.login-form');

formRef.addEventListener("submit", (event) => {
    event.preventDefault();
    if (inputEmail.value.length === 0 || inputPassword.value.length === 0) {
        alert("Все поля должны быть заполнены!");
    } else {
        const inputValues = {
            [inputEmail.name]: inputEmail.value,
            [inputPassword.name]: inputPassword.value,
        };
        console.log(inputValues);
        formRef.reset();
    }
});

