const API_URL = 'http://localhost:3000/auth';

async function register() {
    const username = document.getElementById('reg-username').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;
    const resultDiv = document.getElementById('result');

    try {
        const response = await fetch(`${API_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password })
        });

        const data = await response.json();
        
        if (response.ok) {
            resultDiv.style.color = 'green';
            resultDiv.innerText = data.message;
        } else {
            resultDiv.style.color = 'red';
            resultDiv.innerText = data.message;
        }
    } catch (error) {
        resultDiv.style.color = 'red';
        resultDiv.innerText = 'Registration failed';
    }
}

async function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const resultDiv = document.getElementById('result');

    try {
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();
        
        if (response.ok) {
            resultDiv.style.color = 'green';
            resultDiv.innerText = data.message;
            localStorage.setItem('token', data.token);
        } else {
            resultDiv.style.color = 'red';
            resultDiv.innerText = data.message;
        }
    } catch (error) {
        resultDiv.style.color = 'red';
        resultDiv.innerText = 'Login failed';
    }
}