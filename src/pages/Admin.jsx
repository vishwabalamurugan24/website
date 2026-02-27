import { db } from '../firebase';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

const Admin = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [password, setPassword] = useState('');
    const [registrations, setRegistrations] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        if (isLoggedIn) fetchRegistrations();
    }, [isLoggedIn]);

    const fetchRegistrations = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "registrations"));
            const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setRegistrations(data);
        } catch (error) {
            console.error("Error fetching: ", error);
        }
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (password === 'admin123') setIsLoggedIn(true);
        else alert('Incorrect Password');
    };

    const exportToExcel = () => {
        const ws = XLSX.utils.json_to_sheet(registrations);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Participants');
        XLSX.writeFile(wb, 'Symposium_Registrations.xlsx');
    };

    const deleteRegistration = (regId) => {
        if (window.confirm('Delete this registration?')) {
            const updated = registrations.filter(r => r.regId !== regId);
            setRegistrations(updated);
            localStorage.setItem('allRegistrations', JSON.stringify(updated));
        }
    };

    const filteredData = registrations.filter(r => {
        const matchesSearch = r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            r.regId.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filter === 'All' || r.event === filter;
        return matchesSearch && matchesFilter;
    });

    if (!isLoggedIn) {
        return (
            <div className="admin-login-page container py-lg">
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="login-card glass-card">
                    <Lock size={48} className="lock-icon" />
                    <h2>Admin Access</h2>
                    <form onSubmit={handleLogin}>
                        <input
                            type="password"
                            placeholder="Enter Admin Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button type="submit" className="btn btn-primary full-width">Login</button>
                    </form>
                    <p className="hint">Hint: admin123</p>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="admin-dashboard container py-lg">
            <div className="admin-header">
                <div className="title-section">
                    <h1>Admin <span className="gradient-text">Dashboard</span></h1>
                    <p><Users size={16} /> Total Registrations: {registrations.length}</p>
                </div>
                <div className="admin-actions">
                    <button onClick={exportToExcel} className="btn btn-outline">
                        <Download size={18} /> Export Excel
                    </button>
                    <button onClick={() => setIsLoggedIn(false)} className="btn btn-danger">
                        <LogOut size={18} /> Logout
                    </button>
                </div>
            </div>

            <div className="dashboard-controls">
                <div className="search-bar">
                    <Search size={18} />
                    <input
                        type="text"
                        placeholder="Search by Name or ID..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <select value={filter} onChange={(e) => setFilter(e.target.value)} className="filter-select">
                    <option value="All">All Events</option>
                    <option value="Code Conquest">Code Conquest</option>
                    <option value="Paper Presentation">Paper Presentation</option>
                    <option value="Robo Soccer">Robo Soccer</option>
                    <option value="Gaming Central">Gaming Central</option>
                    <option value="Photography">Photography</option>
                    <option value="Treasure Hunt">Treasure Hunt</option>
                </select>
            </div>

            <div className="table-container glass-card">
                <table>
                    <thead>
                        <tr>
                            <th>Reg ID</th>
                            <th>Name</th>
                            <th>College</th>
                            <th>Event</th>
                            <th>Transaction ID</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((reg) => (
                            <tr key={reg.regId}>
                                <td><span className="reg-badge">{reg.regId}</span></td>
                                <td>{reg.name}</td>
                                <td>{reg.college}</td>
                                <td>{reg.event}</td>
                                <td>{reg.transactionId}</td>
                                <td><span className="status-pending">Pending</span></td>
                                <td>
                                    <div className="table-actions">
                                        <button className="icon-btn verify" title="Verify"><Check size={16} /></button>
                                        <button onClick={() => deleteRegistration(reg.regId)} className="icon-btn delete" title="Delete"><Trash2 size={16} /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {filteredData.length === 0 && (
                            <tr>
                                <td colSpan="7" className="text-center no-data">No registrations found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Admin;
