import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

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

const loginSection = document.getElementById('login-section');
const dashboardSection = document.getElementById('dashboard-section');

let registrationData = [];

loginSection.innerHTML = `
  <div class="login-card glass-card" style="max-width: 400px; margin: 4rem auto; padding: 3rem; text-align: center;">
    <h2 style="margin-bottom: 2rem;">Admin Access</h2>
    <input type="password" id="admin-pass" placeholder="Enter Password" style="width: 100%; margin-bottom: 1.5rem; padding: 1rem; background: var(--glass); border: 1px solid var(--glass-border); border-radius: 0.5rem; color: white;">
    <button id="login-btn" class="btn btn-primary" style="width: 100%; justify-content: center;">Login</button>
    <p style="margin-top: 1.5rem; color: var(--text-muted); font-size: 0.8rem;">Hint: admin123</p>
  </div>
`;

document.getElementById('login-btn').addEventListener('click', () => {
    if (document.getElementById('admin-pass').value === 'admin123') {
        loginSection.style.display = 'none';
        dashboardSection.style.display = 'block';
        loadRegistrations();
    } else {
        alert("Incorrect password!");
    }
});

async function loadRegistrations() {
    dashboardSection.innerHTML = `<h3 class="text-center">Fetching Registrations...</h3>`;
    try {
        const querySnapshot = await getDocs(collection(db, "registrations"));
        registrationData = [];
        querySnapshot.forEach((doc) => {
            registrationData.push({ id: doc.id, ...doc.data() });
        });
        renderTable();
    } catch (err) {
        console.error(err);
        dashboardSection.innerHTML = `<div class="glass-card" style="padding: 2rem; text-align: center;">
            <h3>Firebase Configuration Error</h3>
            <p>Please update your Firebase credentials in js/admin.js</p>
        </div>`;
    }
}

function renderTable() {
    let rows = registrationData.map(reg => `
      <tr style="border-bottom: 1px solid var(--glass-border);">
        <td style="padding: 1.25rem;">${reg.regId || 'N/A'}</td>
        <td style="padding: 1.25rem;">${reg.name || 'N/A'}</td>
        <td style="padding: 1.25rem;">${reg.college || 'N/A'}</td>
        <td style="padding: 1.25rem;">${reg.event || 'N/A'}</td>
        <td style="padding: 1.25rem;">${reg.transactionId || 'Pending'}</td>
        <td style="padding: 1.25rem;"><span style="color: ${reg.status === 'Pending Verification' ? '#fbbf24' : '#4ade80'};">${reg.status || 'Pending'}</span></td>
      </tr>
    `).join('');

    dashboardSection.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
        <h2>Participant <span class="gradient-text">List</span></h2>
        <button id="export-excel" class="btn btn-primary" style="background: #10b981; border: none;">
          <i data-lucide="download"></i> Download Excel
        </button>
      </div>
      <div class="table-container glass-card" style="overflow-x: auto;">
        <table style="width: 100%; border-collapse: collapse; text-align: left;">
          <thead>
            <tr style="background: rgba(255,255,255,0.05);">
              <th style="padding: 1.25rem;">Reg ID</th>
              <th style="padding: 1.25rem;">Name</th>
              <th style="padding: 1.25rem;">College</th>
              <th style="padding: 1.25rem;">Event</th>
              <th style="padding: 1.25rem;">Transaction</th>
              <th style="padding: 1.25rem;">Status</th>
            </tr>
          </thead>
          <tbody>
            ${rows || '<tr><td colspan="6" style="padding: 3rem; text-align: center; color: var(--text-muted);">No registrations yet.</td></tr>'}
          </tbody>
        </table>
      </div>
    `;

    document.getElementById('export-excel').addEventListener('click', () => {
        // Prepare data for Excel (removing Firebase internal fields)
        const excelData = registrationData.map(({ id, createdAt, updatedAt, ...rest }) => ({
            ...rest,
            RegistrationDate: createdAt ? new Date(createdAt.seconds * 1000).toLocaleString() : 'N/A'
        }));

        const worksheet = XLSX.utils.json_to_sheet(excelData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Participants");
        XLSX.writeFile(workbook, "Symposium_Registrations.xlsx");
    });

    lucide.createIcons();
}
