import React from 'react';
import styles from './gridtime.module.css';
import { TimeIcon } from '../../icons/TimeIcon';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { convertToMinSec } from '../../../util/timeManipulations';

export function GridTime() {
  const graphClicked = useSelector((state: RootState) => state.totalStatistics.graphClicked)
  const days = useSelector((state: RootState) => state.totalStatistics.days)
  const selectedDayIndex = useSelector((state: RootState) => state.totalStatistics.selectedDayIndex)
  const selectedData = graphClicked ? days[selectedDayIndex] : null;

  const todayTimeOnPause = useSelector((state:RootState) => state.todayStatistics.timeOnPause)
  const selectedTimeOnPause = selectedData?.timeOnPause || 0
  const timeOnPause = graphClicked ? selectedTimeOnPause : todayTimeOnPause
  const {roundedMinutes} = convertToMinSec(timeOnPause)

  return (
    <div className= {timeOnPause !== 0 ? styles.wrapper : styles.wrapperGrey}>
      <div className={styles.text}>
        <h3 className={styles.header}>Время на паузе</h3>
        <span className={styles.count}>{roundedMinutes} м</span>
      </div>
     
      <TimeIcon strokeColor= {timeOnPause !== 0 ? "#9C97D7" : "#C4C4C4" }/>
    </div>
  );
}
