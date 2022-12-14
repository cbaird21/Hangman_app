const loginFormHandler = async (event) => {
    event.preventDefault();

    const user = document.querySelector('.input_user').value.trim();
    const password = document.querySelector('.input_pass').value.trim();

    if (user && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ user, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to log in.');
        }
    }
};



document
    .querySelector('.login_btn')
    .addEventListener('click', loginFormHandler);


