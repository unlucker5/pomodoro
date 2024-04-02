import React from 'react';
import styles from './gridstops.module.css';
import { StopsIcon } from '../../icons/StopsIcon';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

export function GridStops() {
  const graphClicked = useSelector((state: RootState) => state.totalStatistics.graphClicked)
  const days = useSelector((state: RootState) => state.totalStatistics.days)
  const selectedDayIndex = useSelector((state: RootState) => state.totalStatistics.selectedDayIndex)
  const selectedData = graphClicked ? days[selectedDayIndex] : null;

  const todayStops = useSelector((state:RootState) => state.todayStatistics.stops)
  const selectedStops = selectedData?.stops || 0
  const stops = graphClicked ? selectedStops : todayStops

  return (
    <div className= {stops !== 0 ? styles.wrapper : styles.greyWrapper}>
        <div className={styles.text}>
          <h3 className={styles.header}>Остановки</h3>
          <span className={styles.count}>{stops}</span>
        </div>
        
        <StopsIcon strokeColor={stops !== 0 ? "#7FC2D7" : "#C4C4C4"}/>
    </div>
  );
}
