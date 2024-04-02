import React from 'react';
import styles from './mainpage.module.css';

interface IMainPageProps {
  children?: React.ReactNode 
}

export function MainPage({children}: IMainPageProps) {
  return (
    <div className={styles.mainPage}>
      {children}
    </div>
  );
}
