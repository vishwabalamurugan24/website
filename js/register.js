import { db, collection, addDoc } from './firebase-config.js';

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
            const docRef = await addDoc(collection(db, "registrations"), data);
            localStorage.setItem('pendingRegDocId', docRef.id);
            localStorage.setItem('recentRegistration', JSON.stringify(data));
            window.location.href = 'payment.html';
        } catch (err) {
            console.error(err);
            alert("Registration failed. Please try again.");
        }
    });
}
