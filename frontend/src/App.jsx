import React, { useState } from 'react';
import "./App.css"
function App() {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');

  const evaluatePasswordStrength = (password) => {
    let score = 0;

    // Check length
    if (password.length >= 8) {
      score++;
    }

    // Check for lowercase letters
    if (/[a-z]/.test(password)) {
      score++;
    }

    // Check for uppercase letters
    if (/[A-Z]/.test(password)) {
      score++;
    }

    // Check for numbers
    if (/\d/.test(password)) {
      score++;
    }

    // Check for special characters
    if (/[^a-zA-Z0-9]/.test(password)) {
      score++;
    }

    switch (score) {
      case 0:
      case 1:
      case 2:
        return "Weak";
      case 3:
        return "Medium";
      case 4:
      case 5:
        return "Strong";
      default:
        return "Invalid Password";
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setStrength(evaluatePasswordStrength(e.target.value));
  };

  return (
    <div className="container" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f4f4f4'
    }}>
      <h2>Password Strength Checker</h2>
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Enter Password"
        style={{
          padding: '10px',
          width: '300px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          transition: 'border-color 0.3s'
        }}
        className="password-input"
        onMouseOver={(e) => e.target.style.borderColor = '#007bff'}
        onMouseOut={(e) => e.target.style.borderColor = '#ccc'}
      />
      <div style={{
        margin: '10px',
        fontWeight: 'bold'
      }}>{strength}</div>
      {/* <img src="password-security.jpg" alt="Password Security" width="200" height="150" /> */}
    </div>
  );
}

export default App;
