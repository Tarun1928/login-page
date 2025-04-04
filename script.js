document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const togglePasswordButton = document.getElementById('toggle-password');
    const loginMessage = document.getElementById('login-message');
    const loginButton = document.querySelector('.login-button');

    // --- Input Label Animation Trigger ---
    // Add 'filled' class if input has value on page load (e.g., autofill)
    [usernameInput, passwordInput].forEach(input => {
        if (input.value) {
            input.classList.add('filled');
        }
        // Also handle dynamic changes
        input.addEventListener('input', () => {
            if (input.value) {
                input.classList.add('filled');
            } else {
                input.classList.remove('filled');
            }
        });
    });


    // --- Toggle Password Visibility ---
    togglePasswordButton.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        togglePasswordButton.textContent = type === 'password' ? 'Show' : 'Hide';
    });

    // --- Form Submission ---
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent actual form submission

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        // Clear previous messages
        loginMessage.textContent = '';
        loginMessage.className = 'message'; // Reset classes

        // Basic validation (replace with actual authentication logic)
        if (username === '' || password === '') {
            loginMessage.textContent = 'Please enter both username and password.';
            loginMessage.classList.add('error');
            return;
        }

        // Simulate API call / Authentication
        loginButton.disabled = true;
        loginButton.querySelector('span').textContent = 'Logging in...';
        loginMessage.textContent = ''; // Clear message during processing

        setTimeout(() => {
            // Example: Check credentials (replace with real logic)
            if (username === 'user' && password === 'password123') {
                loginMessage.textContent = 'Login successful!';
                loginMessage.classList.add('success');
                // Redirect or update UI here
                 // Example: Redirect after 1 second
                // setTimeout(() => { window.location.href = '/dashboard'; }, 1000);
            } else {
                loginMessage.textContent = 'Invalid username or password.';
                loginMessage.classList.add('error');
            }

            // Re-enable button
            loginButton.disabled = false;
            loginButton.querySelector('span').textContent = 'Login';

        }, 1500); // Simulate network delay
    });

    // --- Add subtle mouse move effect to background shapes ---
    const shapesContainer = document.querySelector('.background-shapes');
    const shapes = document.querySelectorAll('.shape');

    document.body.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        // Calculate movement relative to center
        const moveX = (clientX - centerX) * 0.01; // Adjust multiplier for sensitivity
        const moveY = (clientY - centerY) * 0.01;

        shapes.forEach((shape, index) => {
            // Apply slightly different movement to each shape for parallax
            const depth = (index + 1) * 0.5; // Simple depth factor
            shape.style.transform = `translate(${moveX * depth}px, ${moveY * depth}px)`;
        });
    });

     // Reset transform on mouse leave to avoid shapes staying offset
     document.body.addEventListener('mouseleave', () => {
         shapes.forEach(shape => {
             shape.style.transform = 'translate(0, 0)';
         });
     });

});
