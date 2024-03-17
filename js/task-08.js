const registerForm = document.querySelector('.login-form');

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;

    if (email === '' || password === '') {
        alert`Please fill in all the fields!`
    }
    // const FormData = {
    //     email,
    //     password,
    // };

    const formData = new FormData(event.currentTarget);
    // formData.forEach((value, name) => {
    //     console.log('valuel', value);
    //     console.log('name', name);
    // })

    console.log(formData);
    registerForm.reset();
}
