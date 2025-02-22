import { useState } from 'react';
import styles from './LoginForm.module.css';

export default function LoginForm({ onSwitchToSignup, onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Welcome Back</h2>
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
        Login
      </button>
      <p className={styles.switchText}>
        Don't have an account?{' '}
        <button type="button" onClick={onSwitchToSignup} className={styles.switchButton}>
          Sign up
        </button>
      </p>
    </form>
  );
}