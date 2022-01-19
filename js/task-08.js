const formRef = document.querySelector('.login-form');

formRef.addEventListener("submit", (event) => {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;

    if (email === "" || password === "") {
        alert("Все поля должны быть заполнены!");
    } else {
        const inputValues = {
            email,
            password,
        };
    console.log(inputValues);
    formRef.reset();
}
});