import React from 'react';
import styles from './gridfocus.module.css';
import { FocusIcon } from '../../icons/FocusIcon';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

export function GridFocus() {
  // данные с хранилища
  const graphClicked = useSelector((state: RootState) => state.totalStatistics.graphClicked)
  const days = useSelector((state: RootState) => state.totalStatistics.days)
  const selectedDayIndex = useSelector((state: RootState) => state.totalStatistics.selectedDayIndex)
  const selectedData = graphClicked ? days[selectedDayIndex] : null;
  const selectedTotalTime = selectedData?.totalTime || 0
  const selectedTimeOnPause = selectedData?.timeOnPause || 0 
  const selectedPomodoro = selectedData?.totalPomodoro || 0

  // данные за сегодня
  const totalTime = useSelector((state: RootState) => state.todayStatistics.totalTime);
  const timeOnPause = useSelector((state: RootState) => state.todayStatistics.timeOnPause)
  const totalPomodoro = useSelector((state: RootState) => state.todayStatistics.totalPomodoro)

  // Вычесленеия
  const todayTime = totalTime + timeOnPause
  const selectedTime = selectedTotalTime + selectedTimeOnPause
  const sumTime = graphClicked ? selectedTime : todayTime
  const pomodoro = graphClicked ? selectedPomodoro : totalPomodoro
  const focus = Math.floor((pomodoro * 25 / (sumTime/ 60)) * 100);

  return (
    <>
      {sumTime !== 0 ? (
        <div className= {styles.wrapper}>
          <div className={styles.text}>
            <h3 className={styles.header}>Фокус</h3>
            <span className={styles.procents}>{focus} %</span>
          </div>
          <FocusIcon strokeColor="#FFAE35"/>
        </div>
          ) : (
          <div className={`${styles.wrapper} ${styles.bggrey}`}>
            <div className={styles.text}>
              <h3 className={styles.header}>Фокус</h3>
              <span className={styles.procents}>0 %</span>
            </div>
            <FocusIcon strokeColor="#C4C4C4"/>
          </div>
          )}
          

    </>
  );
}
