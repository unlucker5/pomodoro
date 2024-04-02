import React from 'react';
import styles from './statistics.module.css';
import { StatisticsIcon } from '../../icons/StatisticsIcon';
import { useNavigate } from 'react-router-dom';

export function Statistics() {
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    navigate('/statistics');
  };

  return (
    <a href="/statistics" className={styles.wrapper} onClick={handleClick}>
       <StatisticsIcon/>
       <div className= {styles.text}>Статистика</div>
    </a>
  );
}
