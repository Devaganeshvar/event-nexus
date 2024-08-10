import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext'; 
import Login from './Login';
import Home from './Home'; 
import EventNeuxAnimation from './TransitionAnimation';
import Footer from './Footer';
import Findyourevent from './Findyourevent';
import ProfilePage from './Profile';
import CreateEventPage from './CreateEvent';
import ProtectedRoute from './ProtectedRoute'; 
import AdminPage from './Admin';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/"  element={<Home />}  />
          <Route path="/animation" element={<EventNeuxAnimation/>} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/footer" element={<Footer/>} />
          <Route path='/event' element={<Findyourevent />} />
          <Route path='/create' element={<CreateEventPage />} />
          <Route path='/admin' element={<AdminPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
