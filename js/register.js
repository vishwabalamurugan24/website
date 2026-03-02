import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const regForm = document.getElementById('register-form');
if (regForm) {
    regForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const regId = 'INN' + Math.random().toString(36).substr(2, 6).toUpperCase();
        const data = {
            regId: regId,
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            college: document.getElementById('college').value,
            department: document.getElementById('dept').value,
            year: document.getElementById('year').value,
            event: document.getElementById('event').value,
            status: 'Pending Payment',
            createdAt: new Date()
        };

        try {
            const response = await fetch('http://localhost:3000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            if (response.ok) {
                localStorage.setItem('pendingRegDocId', data.regId);
                localStorage.setItem('recentRegistration', JSON.stringify(data));
                window.location.href = 'payment.html';
            } else {
                alert("Failed to register. Please try again.");
            }
        } catch (err) {
            console.error(err);
            alert("Firebase error. Check Console.");
            // Fallback for demo
            localStorage.setItem('recentRegistration', JSON.stringify(data));
            window.location.href = 'payment.html';
        }
    });
}
