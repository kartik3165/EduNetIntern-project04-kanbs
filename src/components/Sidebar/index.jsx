/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';

export default function Sidebar({ isOpen, onClose }) {
  const menuItems = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Accounts', path: '/accounts' },
    { name: 'Budgets', path: '/budgets' },
    { name: 'Reports', path: '/reports' },
    { name: 'Settings', path: '/settings' }
  ];

  return (
    <nav className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <ul>
        {menuItems.map((item) => (
          <li key={item.path} className={styles.menuItem}>
            <NavLink
              to={item.path}
              className={({ isActive }) => 
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
              onClick={onClose} // Close sidebar on mobile after clicking
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}