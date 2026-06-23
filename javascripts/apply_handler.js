document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('applyForm');
    const message = document.getElementById('formMessage');

    if (!form || !message) {
        return;
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const position = document.getElementById('position').value;
        const experience = document.getElementById('experience').value;
        const messageText = document.getElementById('message').value.trim();

        let errors = [];

        if (name.length < 2) {
            errors.push('Please enter your full name.');
        }

        if (!email.includes('@') || !email.includes('.')) {
            errors.push('Please enter a valid email address.');
        }

        if (!/^\d{10,11}$/.test(phone.replace(/\D/g, ''))) {
            errors.push('Please enter a valid phone number with 10 or 11 digits.');
        }

        if (!position) {
            errors.push('Please select a position or course.');
        }

        if (!experience) {
            errors.push('Please select your experience level.');
        }

        if (messageText.length < 20) {
            errors.push('Please write at least 20 characters about why you want to apply.');
        }

        if (errors.length > 0) {
            message.textContent = errors.join(' ');
            message.className = 'formmessage error';
            return;
        }

        message.textContent = 'Application submitted successfully! We will be in touch soon.';
        message.className = 'formmessage success';
        form.reset();
    });
});
