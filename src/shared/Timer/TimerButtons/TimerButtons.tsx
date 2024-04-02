import React, { useEffect, useState } from 'react';
import styles from './timerbuttons.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { resetTimer, startTimer, stopTimer,  } from '../../../store/timer/reducer';
import { RootState } from '../../../store/store';
import { increaseStops, increaseTimeOnPause, increaseTotalPomodoro,  } from '../../../store/todayStatistics/reducer';

export function TimerButtons() {
  const isRunning:boolean = useSelector((state: RootState) => state.timer.isRunning);
  const isPaused:boolean = useSelector((state: RootState) => state.timer.isPaused)
  const dispatch = useDispatch();

  function handlePause() {
    dispatch(stopTimer())
    dispatch(increaseStops())
  }


  function handleDone() {
    dispatch(resetTimer())
    dispatch(increaseTotalPomodoro())
  }



  useEffect(() => {
    let timerId:any;

    if (isPaused) {
      timerId = setInterval(() => {
        dispatch(increaseTimeOnPause());
      }, 1000);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [isPaused, dispatch]);  



  return (
    <div className={styles.wrapper}>
      {!isRunning && !isPaused && (
        <>
          <button className={`${styles.leftButton} btn-green`} onClick={() => dispatch(startTimer())}>Старт</button>
          <button className={`${styles.rightButton}`} disabled>Стоп</button>
        </>
      )}
      {isRunning && (
        <>
        <button className={`${styles.leftButton} btn-green`} onClick={handlePause}>Пауза</button>
        <button className={`${styles.rightButton} btn-red`} onClick={() => dispatch(resetTimer())}>Пропустить</button>
        </>
      )}
      {isPaused && (
        <>
          <button className={`${styles.leftButton} btn-green`} onClick={() => dispatch(startTimer())}>Продолжить</button>
          <button className={`${styles.rightButton} btn-red`} onClick={handleDone}>Сделано</button>
        </>
      )}
    </div>
  );
}
