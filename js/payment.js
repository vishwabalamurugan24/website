import { db, doc, updateDoc } from './firebase-config.js';

const paymentForm = document.getElementById('payment-form');
const paymentContent = document.getElementById('payment-content');
const successScreen = document.getElementById('success-screen');
const regIdDisplay = document.getElementById('display-regId');

if (paymentForm) {
    paymentForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const tid = document.getElementById('transactionId').value;
        const docId = localStorage.getItem('pendingRegDocId');
        const recentReg = JSON.parse(localStorage.getItem('recentRegistration') || '{}');

        try {
            if (docId) {
                const regRef = doc(db, "registrations", docId);
                await updateDoc(regRef, {
                    transactionId: tid,
                    status: 'Pending Verification',
                    updatedAt: new Date()
                });
            }

            paymentContent.style.display = 'none';
            successScreen.style.display = 'block';
            regIdDisplay.innerText = recentReg.regId || 'N/A';
            localStorage.removeItem('pendingRegDocId');

        } catch (err) {
            console.error(err);
            alert("Submission failed. Please try again.");
        }
    });
}
