import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import SummaryCard from '../components/SummaryCard';
import SpendingChart from '../components/SpendingChart';
import TransactionList from '../components/TransactionList';
import styles from './css/Dashboard.module.css';

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Sample data
  const financialData = {
    totalBalance: 45230,
    monthlySpending: 12450,
    savingsRate: 18.7,
    transactions: [
      { id: 1, category: 'Groceries', description: 'Supermarket', amount: 125.75, date: '2024-02-15', type: 'expense' },
      { id: 2, category: 'Salary', description: 'Monthly salary', amount: 4500.00, date: '2024-02-01', type: 'income' },
      { id: 3, category: 'Utilities', description: 'Electricity', amount: 89.99, date: '2024-02-10', type: 'expense' }
    ],
    spendingData: [
      { name: 'Jan', amount: 4000 },
      { name: 'Feb', amount: 3000 },
      { name: 'Mar', amount: 2000 },
      { name: 'Apr', amount: 2780 },
      { name: 'May', amount: 1890 },
      { name: 'Jun', amount: 2390 }
    ]
  };

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    if (isMobile) {
      setIsSidebarOpen(!isSidebarOpen);
    }
  };

  return (
    <div className={styles.container}>
      <Header onToggleSidebar={toggleSidebar} />
      
      <div className={styles.contentWrapper}>
        <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
        
        <main className={`${styles.mainContent} ${!isSidebarOpen ? styles.fullWidth : ''}`}>
          <div className={styles.summaryGrid}>
            <SummaryCard 
              title="Total Balance" 
              amount={financialData.totalBalance.toLocaleString()} 
              trend={2.5} 
            />
            <SummaryCard 
              title="Monthly Spending" 
              amount={financialData.monthlySpending.toLocaleString()} 
              trend={-1.8} 
            />
            <SummaryCard 
              title="Savings Rate" 
              amount={`${financialData.savingsRate}%`} 
              trend={0.5} 
            />
          </div>

          <div className={styles.chartSection}>
            <SpendingChart data={financialData.spendingData} />
          </div>

          <div className={styles.transactionsSection}>
            <TransactionList transactions={financialData.transactions} />
          </div>
        </main>
      </div>

      {isMobile && isSidebarOpen && (
        <div className={styles.overlay} onClick={toggleSidebar} />
      )}
    </div>
  );
}