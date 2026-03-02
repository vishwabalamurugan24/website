import { db, collection, getDocs } from './firebase-config.js';

const loginSection = document.getElementById('login-section');
const dashboardSection = document.getElementById('dashboard-section');

let registrationData = [];

// Login Section Injection
loginSection.innerHTML = `
  <div class="glass-card web-card-pulse" style="max-width: 450px; margin: 4rem auto; text-align: center; border: 2px solid var(--primary);">
    <div style="background: rgba(226,54,54,0.1); width: 60px; height: 60px; border-radius: 15px; display: flex; align-items: center; justify-content: center; margin: 0 auto 2rem;">
      <i data-lucide="shield-check" style="color: var(--primary);"></i>
    </div>
    <h2 class="spider-title" style="font-size: 2.5rem; margin-bottom: 0.5rem;">SPIDER <span style="color: var(--primary);">INTEL</span></h2>
    <p style="color: var(--text-secondary); margin-bottom: 2.5rem; font-size: 0.85rem;">Classified access only. Authorized heroes please verify.</p>
    <div style="text-align: left; margin-bottom: 1.5rem;">
      <label style="display: block; margin-bottom: 0.5rem; font-weight: 800; font-size: 0.7rem; text-transform: uppercase;">Master Override Code</label>
      <input type="password" id="admin-pass" placeholder="••••••••" style="width: 100%; padding: 1rem; background: rgba(255,255,255,0.03); border: 1px solid var(--glass-border); border-radius: 8px; color: white;">
    </div>
    <button id="login-btn" class="mask-btn" style="width: 100%; justify-content: center;">
        <span>BYPASS SECURITY</span>
    </button>
  </div>
`;

lucide.createIcons();

document.getElementById('login-btn').addEventListener('click', () => {
  if (document.getElementById('admin-pass').value === 'admin123') {
    loginSection.style.display = 'none';
    dashboardSection.style.display = 'block';
    loadRegistrations();
  } else {
    alert("Unauthorized agent. Base security alerted.");
  }
});

async function loadRegistrations() {
  dashboardSection.innerHTML = `
    <div class="flex flex-col items-center justify-center py-20">
        <div class="web-swing-loader mb-6"></div>
        <h3 class="spider-title text-center" style="font-size: 2rem;">Syncing Multiverse Data...</h3>
    </div>
  `;
  try {
    const querySnapshot = await getDocs(collection(db, "registrations"));
    registrationData = [];
    querySnapshot.forEach((doc) => {
      registrationData.push({ id: doc.id, ...doc.data() });
    });
    renderTable();
  } catch (err) {
    console.error(err);
    dashboardSection.innerHTML = `<h3 class="hero-font text-center">Connection Lost. Mainframe Error.</h3>`;
  }
}

function renderTable() {
  let rows = registrationData.map(reg => `
      <tr style="border-bottom: 1px solid var(--glass-border); transition: background 0.2s;">
        <td style="padding: 1.25rem; font-family: monospace; font-size: 0.85rem; color: var(--primary); font-weight: 700;">${reg.regId || 'N/A'}</td>
        <td style="padding: 1.25rem; font-weight: 800;">${reg.name || 'N/A'}</td>
        <td style="padding: 1.25rem; color: var(--text-secondary); font-size: 0.9rem;">${reg.college || 'N/A'}</td>
        <td style="padding: 1.25rem; color: var(--text-secondary); font-size: 0.8rem;">${reg.department || 'N/A'} (${reg.year || '?'} Yr)</td>
        <td style="padding: 1.25rem;">
          <span style="background: var(--glass); padding: 0.3rem 0.8rem; border-radius: 5px; font-size: 0.75rem; border: 1px solid var(--primary); color: white; font-weight: 800;">${reg.event || 'N/A'}</span>
        </td>
        <td style="padding: 1.25rem;">
           <span style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.8rem; font-weight: 900; color: ${reg.status === 'Verified' ? '#4ADE80' : '#FBBF24'}">
             ${reg.status || 'UNVERIFIED'}
           </span>
        </td>
      </tr>
    `).join('');

  dashboardSection.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 3rem;">
        <div>
          <h2 class="spider-title" style="font-size: 3rem;">MISSION <span style="color: var(--primary);">LOGS</span></h2>
          <p style="color: var(--text-secondary); font-size: 0.85rem; font-weight: 700;">Total Active Heroes: <strong style="color: white;">${registrationData.length}</strong></p>
        </div>
        <button id="export-excel" class="web-glow-btn">
          <span>DOWNLOAD REPORT</span>
        </button>
      </div>
      <div class="glass-card" style="padding: 1rem; overflow-x: auto;">
        <table style="width: 100%; border-collapse: collapse; text-align: left; min-width: 800px;">
          <thead>
            <tr style="background: rgba(255,255,255,0.03); color: var(--text-secondary); font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.15em;">
              <th style="padding: 1.25rem;">ID</th>
              <th style="padding: 1.25rem;">Hero Name</th>
              <th style="padding: 1.25rem;">Academy</th>
              <th style="padding: 1.25rem;">Division</th>
              <th style="padding: 1.25rem;">Mission</th>
              <th style="padding: 1.25rem;">Status</th>
            </tr>
          </thead>
          <tbody>
            ${rows || '<tr><td colspan="6" style="padding: 4rem; text-align: center; color: var(--text-secondary); font-weight: 700;">No data found in the multiverse.</td></tr>'}
          </tbody>
        </table>
      </div>
    `;

  document.getElementById('export-excel').addEventListener('click', () => {
    const excelData = registrationData.map(({ id, createdAt, updatedAt, ...rest }) => {
      // Clean up data for Excel
      const cleanRow = {
        Reg_ID: rest.regId || 'N/A',
        Full_Name: rest.name || 'N/A',
        Email: rest.email || 'N/A',
        College: rest.college || 'N/A',
        Department: rest.department || 'N/A',
        Year: rest.year || 'N/A',
        Event: rest.event || 'N/A',
        Status: rest.status || 'Pending',
        Enrollment_Date: createdAt ? (createdAt.toDate ? createdAt.toDate().toLocaleString() : new Date(createdAt).toLocaleString()) : 'N/A'
      };
      return cleanRow;
    });

    const worksheet = XLSX.utils.json_to_sheet(excelData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "MISSION_LOGS");

    // Auto-size columns
    const wscols = [
      { wch: 15 }, { wch: 25 }, { wch: 30 }, { wch: 30 }, { wch: 25 }, { wch: 10 }, { wch: 25 }, { wch: 15 }, { wch: 25 }
    ];
    worksheet['!cols'] = wscols;

    XLSX.writeFile(workbook, "Symposium_2026_Participants.xlsx");
  });

  lucide.createIcons();
}
