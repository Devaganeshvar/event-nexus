import React, { useState } from "react";
import axios from "axios"; // For making API requests if needed

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Assuming there's an API endpoint to handle password reset
      // const response = await axios.post('http://localhost:8080/forgot-password', { email });

      setMessage("If this email is registered, a reset link will be sent.");
      // You can handle the response here, e.g., show success or error messages
    } catch (error) {
      console.error('There was an error sending the reset email!', error);
      setMessage("There was an error. Please try again later.");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}>
      <h2>Forgot Password</h2>
      <p>Please enter your email address to receive a password reset link.</p>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
        <input
          type="email"
          value={email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
          style={{ padding: "10px", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        <button type="submit" style={{ padding: "10px", borderRadius: "5px", border: "none", backgroundColor: "#007bff", color: "#fff", cursor: "pointer" }}>
          Send Reset Link
        </button>
      </form>
      {message && <p style={{ marginTop: "20px", color: "#333" }}>{message}</p>}
    </div>
  );
};

export default ForgotPassword;
