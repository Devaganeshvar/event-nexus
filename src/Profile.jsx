import React, { useState } from 'react';
import './Profile.css';  // Custom CSS for styling
import { FaFacebookF, FaGoogle } from 'react-icons/fa'; // Import icons for social media buttons
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AccountSettings = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: 'Devaganeshvar',
    lastName: 'VK',
    email: 'devaganeshvar@example.com',
    password: '',
    language: 'English',
  });

  const [isEditMode, setIsEditMode] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User Info Updated:', userInfo);
    setIsEditMode(false);
  };

  return (
    <div className="account-settings-wrapper">
  <h2 className="profile-heading">Profile</h2>

  {!isEditMode ? (
    <div className="view-mode-text">
      <div className="form-section">
        <label className="form-label">First Name:</label>
        <p>{userInfo.firstName}</p>
      </div>
      <div className="form-section">
        <label className="form-label">Last Name:</label>
        <p>{userInfo.lastName}</p>
      </div>
      <div className="form-section">
        <label className="form-label">Email:</label>
        <p>{userInfo.email}</p>
      </div>
      <div className="form-section">
        <label className="form-label">Password:</label>
        <p>*******</p>
      </div>
      <div className="form-section">
        <label className="form-label">Language:</label>
        <p>{userInfo.language}</p>
      </div>
      <button onClick={handleEditClick} className="btn-edit">Edit</button>
    </div>
  ) : (
    <form onSubmit={handleSubmit}>
      <div className="form-section">
        <label className="form-label">First Name</label>
        <input
          type="text"
          name="firstName"
          value={userInfo.firstName}
          onChange={handleInputChange}
          className="form-input"
        />
      </div>
      <div className="form-section">
        <label className="form-label">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={userInfo.lastName}
          onChange={handleInputChange}
          className="form-input"
        />
      </div>
      <div className="form-section">
        <label className="form-label">Email</label>
        <input
          type="email"
          name="email"
          value={userInfo.email}
          onChange={handleInputChange}
          className="form-input"
        />
      </div>
      <div className="form-section">
        <label className="form-label">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter new password"
          onChange={handleInputChange}
          className="form-input"
        />
      </div>
      <div className="form-section">
        <label className="form-label">Language</label>
        <select name="language" value={userInfo.language} onChange={handleInputChange} className="form-select">
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
        </select>
      </div>
      <button type="submit" className="btn-save">Save Changes</button>
    </form>
  )}

  <div className="linked-accounts-container">
    <h3 className="sub-heading">Linked Accounts</h3>
    <p className="description-text">Link your social media accounts</p>
    <div className="social-buttons-container">
      <button className="social-button"><FaFacebookF /></button>
      <button className="social-button"><FontAwesomeIcon icon={faXTwitter} /></button>
      <button className="social-button"><FaGoogle /></button>
    </div>
  </div>

  <div className="email-preferences-container">
    <h3 className="sub-heading">Email Preferences</h3>
    <p className="description-text">Manage your email notifications</p>
    {/* Add options to manage email notifications here */}
  </div>
</div>
  );
};

export default AccountSettings;
