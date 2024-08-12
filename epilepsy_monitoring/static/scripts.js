document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // Simple client-side validation (you might want to enhance this)
            if (username === 'admin' && password === 'password') {
                alert('Login successful');
                window.location.href = 'dashboard';
            } else {
                alert('Invalid username or password');
            }
        });
    }

    const eegChart = document.getElementById('eeg-chart')?.getContext('2d');

    if (eegChart) {
        // Example data for EEG chart
        const data = {
            labels: ['0s', '0.25s', '0.5s', '0.75s', '1s'],
            datasets: [{
                label: 'EEG Signal',
                data: [12, 19, 3, 5, 
