"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from '../../forms.module.css'; 

export default function SignUpPage() {
  const [role, setRole] = useState('seeker');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(''); // To store password mismatch error

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return; // Stop the form submission
    }
    
    // If they match, clear any previous error
    setError('');
    
    // Handle signup logic here
    console.log('Sign up attempt with:', { role, email, password });
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formBox}>
        <h1 className={styles.title}>Create Your Account</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          
          <div className={styles.formGroup}>
            <label className={styles.label}>I am a:</label>
            <div className={styles.radioGroup}>
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="role"
                  value="seeker"
                  checked={role === 'seeker'}
                  onChange={() => setRole('seeker')}
                  className={styles.radioInput}
                />
                Job Seeker
              </label>
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="role"
                  value="poster"
                  checked={role === 'poster'}
                  onChange={() => setRole('poster')}
                  className={styles.radioInput}
                />
                Job Poster
              </label>
            </div>
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input
              type="email"
              id="email"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>Password</label>
            <input
              type="password"
              id="password"
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="confirmPassword" className={styles.label}>Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              className={styles.input}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          
          {/* Show error message if it exists */}
          {error && <p className={styles.error}>{error}</p>}
          
          <button type="submit" className={styles.button}>
            Sign Up
          </button>
          
        </form>
        <p className={styles.link}>
          Already have an account?{' '}
          <Link href="/auth/login">Login</Link>
        </p>
      </div>
    </div>
  );
}