import styles from './css/ProfilePage.module.css';
import profileImage from '../assets/img/profile.jpg'; // Adjust the path as needed

export default function ProfilePage() {
  return (
    <div className={styles.container}>
      <h1>Profile Settings</h1>
      <div className={styles.profileCard}>
        <div 
          className={styles.avatar}
          style={{ backgroundImage: `url(${profileImage})` }}
        />
        <h2>Kartik Nagare</h2>
        <p>xyz@gmail.com</p>
        
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label>Full Name</label>
            <input type="text" defaultValue="Kartik Nagare" />
          </div>
          <div className={styles.formGroup}>
            <label>Email</label>
            <input type="email" defaultValue="xyz@gmail.com" />
          </div>
          <button type="submit" className={styles.saveButton}>
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}