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

const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const inputs = contactForm.querySelectorAll('input, textarea');
        const data = {
            name: inputs[0].value,
            email: inputs[1].value,
            message: inputs[2].value,
            type: 'Contact Inquiry',
            createdAt: new Date()
        };

        try {
            await addDoc(collection(db, "messages"), data);
            alert("Message sent successfully!");
            contactForm.reset();
        } catch (err) {
            console.error(err);
            alert("Error sending message. Please configure Firebase.");
        }
    });
}
