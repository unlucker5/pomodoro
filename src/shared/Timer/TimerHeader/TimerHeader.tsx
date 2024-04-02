import React from 'react';
import styles from './timerheader.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { removeAction } from '../../../store/actions/reducer';
import { resetPomodoroCount, resetTimer } from '../../../store/timer/reducer';
import { increaseTotalPomodoro } from '../../../store/todayStatistics/reducer';

export function TimerHeader() {
  const actions = useSelector((state: RootState) => state.actions);
  const storedTime = useSelector((state: RootState) => state.timer.time);
  const isRunning = useSelector((state: RootState) => state.timer.isRunning);
  const isPaused = useSelector((state: RootState) => state.timer.isPaused)
  let pomodoro = useSelector((state: RootState) => state.timer.pomodoroCount)
  const dispatch = useDispatch()

  let bgColor: string | undefined = 'var(--grey)';
  if (isRunning) {
    bgColor = 'var(--lightGreen)';
  } if (isPaused) {
    bgColor = 'var(--red)';
  } 

  if (storedTime == 0 ) {
    dispatch(resetTimer())
    dispatch(increaseTotalPomodoro())
  }

  if (actions[1] && pomodoro == actions[1].time) {
    dispatch(removeAction({item: 1}))
    dispatch(resetPomodoroCount())
  }

  return (
    <div className={styles.wrapper} style={{ backgroundColor: bgColor }}>
      <div className={styles.task}>
        {actions.length > 1 ? actions[1].text : 'Cверстать сайт'}
      </div>
      <div className={styles.count}>Помидор {pomodoro + 1} </div>
    </div>
  );
}
