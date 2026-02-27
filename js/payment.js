import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, doc, updateDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

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

const paymentForm = document.getElementById('payment-form');
const paymentContent = document.getElementById('payment-content');
const successScreen = document.getElementById('success-screen');
const regIdDisplay = document.getElementById('display-regId');

const recentReg = JSON.parse(localStorage.getItem('recentRegistration') || '{}');
const docId = localStorage.getItem('pendingRegDocId');

if (paymentForm) {
    paymentForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const transactionId = document.getElementById('transactionId').value;

        try {
            if (docId) {
                const regRef = doc(db, "registrations", docId);
                await updateDoc(regRef, {
                    transactionId: transactionId,
                    status: 'Pending Verification',
                    updatedAt: new Date()
                });
            }

            paymentContent.style.display = 'none';
            successScreen.style.display = 'block';
            regIdDisplay.innerText = recentReg.regId || 'N/A';

        } catch (err) {
            console.error(err);
            alert("Firebase error updated details. Showing Success screen for demo.");
            paymentContent.style.display = 'none';
            successScreen.style.display = 'block';
            regIdDisplay.innerText = recentReg.regId || 'N/A';
        }
    });
}
