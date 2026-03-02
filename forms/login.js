///////////////////////////////////password visibility toggle/////////////////////////////////////////
document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password');
    const eyeSlash = document.querySelector('.fa-eye-slash');
    const eye = document.querySelector('.fa-eye');

    if (!passwordInput || !eyeSlash || !eye) return;

    // sync initial icon visibility with input type
    if (passwordInput.type === 'password') {
        eye.style.display = 'none';
        eyeSlash.style.display = '';
    } else {
        eye.style.display = '';
        eyeSlash.style.display = 'none';
    }

    // click eye-slash (currently hidden) -> show password
    eyeSlash.addEventListener('click', () => {
        passwordInput.type = 'text';
        eye.style.display = '';
        eyeSlash.style.display = 'none';
    });

    // click eye (currently visible) -> hide password
    eye.addEventListener('click', () => {
        passwordInput.type = 'password';
        eyeSlash.style.display = '';
        eye.style.display = 'none';
    });

    // pointer cursor
    [eye, eyeSlash].forEach(el => el.style.cursor = 'pointer');
});
