import React from 'react';
import styles from './griddate.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { convertToMinSec } from '../../../util/timeManipulations';

export function GridDate() {
  const graphClicked = useSelector((state: RootState) => state.totalStatistics.graphClicked)
  const days = useSelector((state: RootState) => state.totalStatistics.days)
  const selectedDayIndex = useSelector((state: RootState) => state.totalStatistics.selectedDayIndex)
  const selectedData = graphClicked ? days[selectedDayIndex] : null;
  
  
  const today = useSelector((state: RootState) => state.todayStatistics.todayLong)
  const selectedDay = selectedData?.fullDay || ''
  let day = graphClicked ? selectedDay : today

  const todayTime = useSelector((state: RootState) => state.todayStatistics.totalTime);
  const selectedTime = selectedData?.totalTime || 0

  let time = graphClicked ? selectedTime : todayTime;
  const {roundedMinutes} = convertToMinSec(time)

  return (
        <>
          {time !== 0 ? (
            <div className={styles.wrapper}>
              <h3 className={styles.day}>{day.charAt(0).toUpperCase() + day.slice(1)}</h3>
              <span className={styles.commonText}>Вы работали над задачами в течение</span>
              <span className={styles.timeText}>{roundedMinutes} минуты</span>
            </div>
          ) : (
            <div className={styles.wrapper}>
              <h3 className={styles.day}>{day.charAt(0).toUpperCase() + day.slice(1)}</h3>
              <span className={styles.commonText}>Нет данных</span>
            </div>
          )}
        </>
      )
}
