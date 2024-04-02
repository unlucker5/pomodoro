import React from 'react';
import { Logo } from './Logo';
import { Statistics } from './Statistics';
import styles from './header.module.css';


export function Header() {
  return (
    <header className= {styles.header}>
      <Logo/>
      <Statistics/>
    </header>
  );
}
