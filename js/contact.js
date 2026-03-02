import { db, collection, addDoc } from './firebase-config.js';

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
            alert("Submission failed. Please try again.");
        }
    });
}
