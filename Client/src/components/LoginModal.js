import React, { useState } from 'react';
import { loginWithEmail } from '../loginAuth';

const LoginModal = ({ open, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  if (!open) return null;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage('');

    if (!email || !password) {
      setErrorMessage('Please fill in both fields.');
      return;
    }

    // Check if email ends with @usiu.ac.ke
    if (!email.endsWith('@usiu.ac.ke')) {
      setErrorMessage('Email must end with @usiu.ac.ke');
      return;
    }

    try{
      await loginWithEmail(email, password);
      setEmail('');
      setPassword('');
      onClose();
      console.log('Login successful')

    } catch(error) {
      setErrorMessage(error.message);
    }

  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button onClick={onClose} style={styles.closeButton}>
          ×
        </button>
        <h2 style={styles.h2}>Log In</h2>
        {errorMessage && <div style={styles.error}>{errorMessage}</div>}
        <form onSubmit={handleSubmit}>
          <div style={styles.inputContainer}>
            <label htmlFor="email" style={styles.label}>
              Email:
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              style={styles.input}
              required
            />
          </div>

          <div style={styles.inputContainer}>
            <label htmlFor="password" style={styles.label}>
              Password:
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              style={styles.input}
              required
            />
          </div>

          <div style={styles.buttonContainer}>
            <button type="submit" style={styles.submitButton}>
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const styles = {
  h2: {
    color: 'black',
    visibility: 'visible',
    textAlign: 'center',
    fontSize: '24px',
    position: 'relative'
  },

  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    position: 'relative',
    width: '500px',
    zIndex: 1001,
    display: 'flex',
    flexDirection: 'column',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    fontSize: '24px',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },
  inputContainer: {
    marginBottom: '15px',
    maxWidth: '450px',
    width: '100%'
  },
  label: {
    display: 'block',
    fontSize: '14px',
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
  },
  buttonContainer: {
    textAlign: 'center',
  },
  submitButton: {
    padding: '10px 20px',
    backgroundColor: '#3f51b5',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%',
  },
  error: {
    color: 'red',
    marginBottom: '10px',
  },
};

export default LoginModal;
