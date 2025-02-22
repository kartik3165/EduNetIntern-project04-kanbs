import styles from './SummaryCard.module.css';

export default function SummaryCard({ title, amount, trend }) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <div className={styles.content}>
        <span className={styles.amount}>{amount}</span>
        <span className={`${styles.trend} ${trend > 0 ? styles.positive : styles.negative}`}>
          {trend}%
        </span>
      </div>
    </div>
  );
}