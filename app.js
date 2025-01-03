document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Clear previous errors
    document.querySelectorAll('.error').forEach(e => e.textContent = '');
    document.getElementById('successMessage').textContent = '';

    let isValid = true;

    // Validate Name
    const name = document.getElementById('name').value;
    if (!name) {
        document.getElementById('nameError').textContent = 'Vardas yra privalomas.';
        isValid = false;
    } else if (name.length < 3 || name.length > 30) {
        document.getElementById('nameError').textContent = 'Vardas turi būti nuo 3 iki 30 simbolių.';
        isValid = false;
    }
    

    // Validate Email
    const email = document.getElementById('email').value;
    if (!email) {
        document.getElementById('emailError').textContent = 'E-mail yra privalomas.';
        isValid = false;
    } else {
        const emailParts = email.split('@');
        if (emailParts.length !== 2 || !emailParts[1].includes('.')) {
            document.getElementById('emailError').textContent = 'Netinkamas E-mail formatas. Pvz.: vardas@vardas.lt';
            isValid = false;
        }
    }

    // Validate Age
    const ageValue = document.getElementById('age').value;
    if (!ageValue) {
        document.getElementById('ageError').textContent = 'Amžius yra privalomas.';
        isValid = false;
    } else {
        const age = parseInt(ageValue, 10);
        if (isNaN(age) || age < 18 || age > 120) {
            document.getElementById('ageError').textContent = 'Amžius turi būti nuo 18 iki 120m.';
            isValid = false;
        }
    }

    // Validate Phone
    const phone = document.getElementById('phone').value;
    if (!phone) {
        document.getElementById('phoneError').textContent = 'Telefono numeris yra privalomas.';
        isValid = false;
    } else {
        const isValidPhone = phone.startsWith('+') && phone.split(' ').length === 3 && phone.replace(/\D/g, '').length === 11;
        if (!isValidPhone) {
            document.getElementById('phoneError').textContent = 'Telefono numeris turi atitikti formatą: +xxx xxx xxxxx.';
            isValid = false;
        }
    }

    // Validate Password
    const password = document.getElementById('password').value;
    if (!password) {
        document.getElementById('passwordError').textContent = 'Slaptažodis yra privalomas.';
        isValid = false;
    } else {
        const isValidPassword = password.length >= 8 && /[a-z]/.test(password) && /[A-Z]/.test(password) && /\d/.test(password) && /[!@#$%^&*]/.test(password);
        if (!isValidPassword) {
            document.getElementById('passwordError').textContent = 'Slaptažodis neatitinka reikalavimų.';
            isValid = false;
        }
    }

    // Validate Confirm Password
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (!confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Pakartoti slaptažodį yra privaloma.';
        isValid = false;
    } else if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Slaptažodžiai nesutampa.';
        isValid = false;
    }
    // If valid, show success message and log user object
    if (isValid) {
        const user = {
            name,
            email,
            age,
            phone
        };
        document.getElementById('successMessage').textContent = 'Registracija sėkminga!';
        console.log(user);
    }
});
