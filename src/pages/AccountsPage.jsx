import styles from './css/Page.module.css';
import Auth from './AuthPage'
import ProfilePage from './ProfilePage'

export default function AccountsPage() {
  return (
    <div className={styles.container}>
      <h1>Accounts</h1>
      <p>If user is not login</p>
      <Auth />
      <p>If user is login</p>
      <ProfilePage />
      <p>Account management page (under construction)</p>
    </div>
  );
}