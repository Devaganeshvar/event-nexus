import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './AuthContext'; 
import Login from './Login';
import Home from './Home'; 
import EventNeuxAnimation from './TransitionAnimation';
import Footer from './Footer';
import Findyourevent from './Findyourevent';
import ProfilePage from './Profile';
import CreateEventPage from './CreateEvent';
import AdminPage from './Admin';
import ForgotPassword from './ForgotPassword';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Default route redirects to login */}
          <Route path="/" element={<Login />} />
          <Route path="/home"  element={<Home />}  />
          <Route path="/animation" element={<EventNeuxAnimation/>} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/footer" element={<Footer/>} />
          <Route path='/event' element={<Findyourevent />} />
          <Route path='/create' element={<CreateEventPage />} />
          <Route path='/admin' element={<AdminPage />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
