import React from 'react';
import styles from './gridpomodorocount.module.css';
import { LogoIcon } from '../../icons/LogoIcon';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { HappyTomatoIcon } from '../../icons/HappyTomatoIcon';


export function GridPomodoroCount() {
  const graphClicked = useSelector((state: RootState) => state.totalStatistics.graphClicked)
  const days = useSelector((state: RootState) => state.totalStatistics.days)
  const selectedDayIndex = useSelector((state: RootState) => state.totalStatistics.selectedDayIndex)
  const selectedData = graphClicked ? days[selectedDayIndex] : null;

  const totalPomodoro = useSelector((state: RootState) => state.todayStatistics.totalPomodoro);
  const selectedPomodoro = selectedData?.totalPomodoro || 0

  const pomodoro = graphClicked ? selectedPomodoro : totalPomodoro

  return (
    <>
    { pomodoro !== 0 ? (
      <div  className= {styles.wrapper}>
        <div className={styles.countWrapper}>
          <LogoIcon size={'81'} />
          <span className={styles.number}>x {pomodoro}</span>
        </div>
        <div className={styles.footer}>
          <span className={styles.footerText}>{pomodoro} помидора</span>
        </div>
    </div>
    ) : (
      <div className= {styles.wrapper}>
        <div className={styles.countWrapper}>
          <HappyTomatoIcon/>
        </div>
      </div>
    ) }
    
    </>
  );
}
