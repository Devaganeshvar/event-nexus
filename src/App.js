import React from 'react';
import ReactDOM from 'react-dom';
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
import EventDetails from './EventDescription';
import FindEventsPage from './FindEventPage';
import ParentComponent from './ParentComponent';
import About from './Aboutus';
import PaymentPage from './PaymentPage';
const App = () => {
  return (
    <React.StrictMode>
    <ParentComponent />
</React.StrictMode>,
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
          <Route path='/des' element={<EventDetails />} />
          <Route path='/find-events' element={<FindEventsPage />} />
          <Route path='/about' element={<About />} />
          <Route path='/payment' element={<PaymentPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
