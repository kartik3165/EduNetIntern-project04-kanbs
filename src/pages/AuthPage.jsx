import { useState } from 'react';
import LoginForm from '../components/Auth/LoginForm';
import SignupForm from '../components/Auth/SignupForm';
import styles from './css/AuthPage.module.css';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  const handleAuthSubmit = (credentials) => {
    console.log('Auth data:', credentials);
    // Add your authentication logic here
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.authContent}>
        {isLogin ? (
          <LoginForm
            onSubmit={handleAuthSubmit}
            onSwitchToSignup={() => setIsLogin(false)}
          />
        ) : (
          <SignupForm
            onSubmit={handleAuthSubmit}
            onSwitchToLogin={() => setIsLogin(true)}
          />
        )}
      </div>
    </div>
  );
}