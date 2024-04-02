import React from 'react';
import styles from './statisticsgrid.module.css';
import { GridDate } from './GridDate';
import { GridFocus } from './GridFocus';
import { GridGraph } from './GridGraph';
import { GridPomodoroCount } from './GridPomodoroCount';
import { GridTime } from './GridTime';
import { GridStops } from './GridStops';


export function StatisticsGrid() {
  return (
    <div className={styles.container}>
      <div className={styles.gridDate}><GridDate/></div>
      <div className={styles.gridPomodoroCount}><GridPomodoroCount/></div>
      <div className={styles.gridGraph}><GridGraph/></div>
      <div className={styles.gridFocus}><GridFocus/></div>
      <div className={styles.gridTime}><GridTime/></div>
      <div className={styles.gridStops}><GridStops/></div>
    </div>
  );
}
