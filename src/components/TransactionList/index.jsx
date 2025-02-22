/* eslint-disable react/prop-types */
import styles from './TransactionList.module.css';

export default function TransactionList({ transactions }) {
  return (
    <div className={styles.container}>
      <h3>Recent Transactions</h3>
      <ul className={styles.list}>
        {transactions.map((transaction) => (
          <li key={transaction.id} className={styles.listItem}>
            <div className={styles.info}>
              <span className={styles.category}>{transaction.category}</span>
              <span className={styles.description}>{transaction.description}</span>
              <span className={styles.date}>{transaction.date}</span>
            </div>
            <span className={`${styles.amount} ${
              transaction.type === 'income' ? styles.income : styles.expense
            }`}>
              {transaction.type === 'income' ? '+' : '-'}₹{transaction.amount.toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}