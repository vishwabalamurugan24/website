
const regForm = document.getElementById('register-form');
if (regForm) {
    regForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const regId = 'SYM' + Math.random().toString(36).substr(2, 6).toUpperCase();
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
            alert("An error occurred. Please try again.");
        }
    });
}
