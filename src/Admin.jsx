import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Admin.css';

const AdminPage = () => {
  const [registrations, setRegistrations] = useState([]);
  const [activeSection, setActiveSection] = useState('registrations');
  const [selectedRegistration, setSelectedRegistration] = useState(null);
  const [newRegistrationData, setNewRegistrationData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const registrationResponse = await axios.get('http://localhost:8080/get');
        setRegistrations(registrationResponse.data);
      } catch (error) {
        setError('There was an error fetching data!');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    navigate('/login');
  };

  const handleUpdate = async (id) => {
    try {
      const response = await axios.put(`http://localhost:8080/update/${id}`, newRegistrationData);
      if (response.status === 200) {
        const updatedRegistrations = registrations.map(reg =>
          reg.id === id ? { ...reg, ...newRegistrationData } : reg
        );
        setRegistrations(updatedRegistrations);
        setNewRegistrationData({});
        setSelectedRegistration(null);
      } else {
        setError('Update failed');
      }
    } catch (error) {
      setError('There was an error updating the registration!');
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/delete/${id}`);
      setRegistrations(registrations.filter(reg => reg.id !== id));
    } catch (error) {
      setError('There was an error deleting the registration!');
      console.error(error);
    }
  };

  const renderSection = () => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    switch (activeSection) {
      case 'registrations':
        return (
          <section className="admin-section">
            <h2>Registrations</h2>
            <ul>
              {registrations.length > 0 ? (
                registrations.map((registration) => (
                  <li key={registration.id}>
                    Username: {registration.username}, Email: {registration.email}, Password: {registration.password}
                    <button onClick={() => {
                      setSelectedRegistration(registration.id);
                      setNewRegistrationData({
                        username: registration.username,
                        email: registration.email,
                        password: registration.password
                      });
                    }}>
                      Update
                    </button>
                    <button onClick={() => handleDelete(registration.id)}>Delete</button>
                  </li>
                ))
              ) : (
                <li>No registrations available</li>
              )}
            </ul>
            {selectedRegistration && (
              <div className="update-form">
                <h3>Update Registration</h3>
                <input
                  type="text"
                  placeholder="Username"
                  value={newRegistrationData.username || ''}
                  onChange={(e) => setNewRegistrationData({ ...newRegistrationData, username: e.target.value })}
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={newRegistrationData.email || ''}
                  onChange={(e) => setNewRegistrationData({ ...newRegistrationData, email: e.target.value })}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={newRegistrationData.password || ''}
                  onChange={(e) => setNewRegistrationData({ ...newRegistrationData, password: e.target.value })}
                />
                <button onClick={() => handleUpdate(selectedRegistration)}>Submit Update</button>
              </div>
            )}
          </section>
        );
      default:
        return <section className="admin-section"><h2>Select a section</h2></section>;
    }
  };

  return (
    <div className="admin-page-container">
      <header className="admin-header">
        <h1>Admin Dashboard</h1>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </header>

      <div className="admin-content">
        <aside className="sidebar">
          <ul>
            <li
              className={activeSection === 'registrations' ? 'active' : ''}
              onClick={() => setActiveSection('registrations')}
            >
              Registrations
            </li>
          </ul>
        </aside>

        <main className="main-content">
          {renderSection()}
        </main>
      </div>
    </div>
  );
};

export default AdminPage;
