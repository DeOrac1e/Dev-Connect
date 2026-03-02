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


//////////////////////////////////merge country code + local phone into hidden 'phone' before submit/////////////////////////////////////////
document.addEventListener('DOMContentLoaded', () => {
    // password toggle (existing)
    const passwordInput = document.getElementById('password');
    const eyeSlash = document.querySelector('.fa-eye-slash');
    const eye = document.querySelector('.fa-eye');

    if (passwordInput && eyeSlash && eye) {
        if (passwordInput.type === 'password') {
            eye.style.display = 'none';
            eyeSlash.style.display = '';
        } else {
            eye.style.display = '';
            eyeSlash.style.display = 'none';
        }

        eyeSlash.addEventListener('click', () => {
            passwordInput.type = 'text';
            eye.style.display = '';
            eyeSlash.style.display = 'none';
        });

        eye.addEventListener('click', () => {
            passwordInput.type = 'password';
            eyeSlash.style.display = '';
            eye.style.display = 'none';
        });

        [eye, eyeSlash].forEach(el => el.style.cursor = 'pointer');
    }

    // merge country code + local phone into hidden 'phone' before submit
    const form = document.getElementById('signupForm') || document.querySelector('form');
    const countryCode = document.getElementById('countryCode');
    const phoneLocal = document.getElementById('phoneLocal');
    const phoneHidden = document.getElementById('phone');

    if (form && countryCode && phoneLocal && phoneHidden) {
        // keep hidden input updated while user types (optional)
        const updateFullPhone = () => {
            const local = (phoneLocal.value || '').replace(/\s+/g, '');
            phoneHidden.value = countryCode.value + local;
        };

        countryCode.addEventListener('change', updateFullPhone);
        phoneLocal.addEventListener('input', updateFullPhone);

        form.addEventListener('submit', (e) => {
            updateFullPhone();
            // simple sanity check: prevent submit if local number too short
            const digits = phoneLocal.value.replace(/\D/g, '');
            if (digits.length < 6) {
                e.preventDefault();
                phoneLocal.focus();
                alert('Please enter a valid phone number.');
            }
        });
    }
});
