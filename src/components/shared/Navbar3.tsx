import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar3 = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:8000/logout', {
        method: 'POST',
        credentials: 'include', // Important for sending cookies
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        alert('Logged out successfully');
        navigate('/login'); // Redirect to login
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/landing-page">Landing Page</Link></li>
        <li><Link to="/user-dashboard">User Dashboard</Link></li>
        <li><Link to="/company-dashboard">Company Dashboard</Link></li>
        <li><Link to="/admin-dashboard">Admin Dashboard</Link></li>
        <li><Link to="/acc-login-page">Acc Login Page</Link></li>
        <li><Link to="/admin-dashboard">Admin dashboard</Link></li>
        <li><Link to="/admin-login-page">Admin Login Page</Link></li>

        <li>
          <button onClick={handleLogout} style={{ background: 'none', border: 'none', color: 'blue', cursor: 'pointer' }}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar3;
