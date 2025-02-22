import { useState } from 'react';
import styles from './SignupForm.module.css';

export default function SignupForm({ onSwitchToLogin, onSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, password });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Create Account</h2>
      <div className={styles.formGroup}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className={styles.submitButton}>
        Sign Up
      </button>
      <p className={styles.switchText}>
        Already have an account?{' '}
        <button type="button" onClick={onSwitchToLogin} className={styles.switchButton}>
          Login
        </button>
      </p>
    </form>
  );
}