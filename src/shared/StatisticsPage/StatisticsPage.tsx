import React from 'react';
import styles from './statisticspage.module.css';

interface IStatisticsPageProps {
  children?: React.ReactNode 
}

export function StatisticsPage({children}: IStatisticsPageProps) {
  return (
    <div className={styles.statisticsPage}>
      {children}
    </div>
  );
}

