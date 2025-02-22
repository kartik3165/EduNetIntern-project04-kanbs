/* eslint-disable react/prop-types */
import React from 'react';
import profileImage from '../../assets/img/profile.jpg'; // Adjust the path as needed
import styles from './Header.module.css';

export default function Header({ onToggleSidebar }) {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <button className={styles.menuButton} onClick={onToggleSidebar}>
          ☰
        </button>
        <div className={styles.logo}>Finance Tracker</div>
      </div>
      <div className={styles.userProfile}>
        <span className={styles.username}>Kartik</span>
        <div 
          className={styles.avatar}
          style={{ backgroundImage: `url(${profileImage})` }}
        />
      </div>
    </header>
  );
}