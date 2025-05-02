import React, { useState } from 'react';
import { createUser } from '../signUp';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    club: '',
    customClub: '',
    role: '',
    customRole: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const clubOptions = [
    'IT Club',
    'IEEE',
    'GDG on Campus',
    'Math Club',
    'Finance Club',
    'Music Club',
    'Club not listed',
  ];

  const roleOptions = [
    'President',
    'Vice President',
    'Secretary',
    'Treasurer',
    'Marketing',
    'Logistics',
    'Role not listed',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    const { email, password, firstName, lastName, club, role, customClub, customRole } = formData;


    const selectedClub = club === 'Club not listed' ? customClub : club;
    const selectedRole = role === 'Role not listed' ? customRole : role;

    if (!selectedClub) {
      setErrorMessage('Please specify your club.');
      return;
    }

    if (!selectedRole) {
      setErrorMessage('Please specify your role.');
      return;
    }

    console.log('Form Submitted:', { email, password, firstName, lastName, selectedClub, selectedRole });
    createUser(email, password, firstName, lastName, selectedClub, selectedRole);
    alert('Sign-up successful!');
  };

  const styles = {
    container: {
      maxWidth: '600px',
      margin: '40px auto',
      padding: '20px',
      backgroundColor: '#f9f9f9',
      borderRadius: '10px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Arial, sans-serif',
    },
    title: {
      textAlign: 'center',
      color: '#333',
      fontSize: '24px',
      marginBottom: '20px',
    },
    formGroup: {
      marginBottom: '15px',
    },
    label: {
      display: 'block',
      fontWeight: 'bold',
      marginBottom: '5px',
      color: '#555',
    },
    input: {
      width: '100%',
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      fontSize: '16px',
    },
    select: {
      width: '100%',
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      fontSize: '16px',
    },
    button: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      fontSize: '18px',
      cursor: 'pointer',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
    errorMessage: {
      color: 'red',
      textAlign: 'center',
      marginBottom: '15px',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Club Sign-Up</h1>
      <form onSubmit={handleSubmit}>
        {/* Email */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}></label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        {/* First Name */}
        <div style={styles.formGroup}>
          <label style={styles.label}>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        {/* Last Name */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        {/* Club */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Club:</label>
          <select
            name="club"
            value={formData.club}
            onChange={handleChange}
            style={styles.select}
            required
          >
            <option value="">Select a club</option>
            {clubOptions.map((club, index) => (
              <option key={index} value={club}>
                {club}
              </option>
            ))}
          </select>
          {formData.club === 'Club not listed' && (
            <input
              type="text"
              name="customClub"
              placeholder="Enter club name"
              value={formData.customClub}
              onChange={handleChange}
              style={{ ...styles.input, marginTop: '10px' }}
              required
            />
          )}
        </div>

        {/* Role */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Role:</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            style={styles.select}
            required
          >
            <option value="">Select a role</option>
            {roleOptions.map((role, index) => (
              <option key={index} value={role}>
                {role}
              </option>
            ))}
          </select>
          {formData.role === 'Role not listed' && (
            <input
              type="text"
              name="customRole"
              placeholder="Enter role name"
              value={formData.customRole}
              onChange={handleChange}
              style={{ ...styles.input, marginTop: '10px' }}
              required
            />
          )}
        </div>

        {/* Error Message */}
        {errorMessage && <p style={styles.errorMessage}>{errorMessage}</p>}

        {/* Submit */}
        <div>
          <button
            type="submit"
            style={styles.button}
            onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
