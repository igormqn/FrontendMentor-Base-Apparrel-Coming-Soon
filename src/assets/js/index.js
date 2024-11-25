export function setupFormValidation() {
    const form = document.getElementById('form');
    const email = document.getElementById('email');
    const errorIcon = document.querySelector('.error-icon'); // Optionnel si vous voulez afficher une icône
    const errorMessage = document.createElement('p'); // Crée dynamiquement un message d'erreur
    errorMessage.id = 'error-message';
    errorMessage.style.color = 'red'; // Optionnel : style inline pour le message
    form.appendChild(errorMessage);

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const emailVal = email.value;

        if (!ValidateEmail(emailVal)) {
            form.classList.add('error');
            errorMessage.textContent = 'Please enter a valid email address.';
            errorIcon.style.display = 'block'; // Si vous voulez afficher une icône d'erreur
        } else {
            form.classList.remove('error');
            errorMessage.textContent = '';
            document.body.innerHTML = `
                <div style="display:flex; align-items:center; justify-content:center;">
                    <h1>Thank You! An email has been sent.</h1>
                </div>`;
            form.reset();
        }
    });

    function ValidateEmail(email) {
        const re = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
        return re.test(String(email).toLowerCase());
    }
}
