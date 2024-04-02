import React, { useEffect } from "react";
import styles from "./clock.module.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store/store";
import { convertToMinSec } from "../../../util/timeManipulations";
import { tickTimer, addTime } from "../../../store/timer/reducer";
import { increseTotalTime } from "../../../store/todayStatistics/reducer";

export function Clock() {
  const storedTime = useSelector((state: RootState) => state.timer.time);
  const isRunning = useSelector((state: RootState) => state.timer.isRunning);
  const dispatch = useDispatch();
  const {minutes, seconds} = convertToMinSec(storedTime)

  useEffect(() => {
    let timerId:any;

    if (isRunning) {
      timerId = setInterval(() => {
        dispatch(tickTimer());
        dispatch(increseTotalTime())
      }, 1000);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [isRunning, dispatch]);  

  return (


    <div className={styles.wrapper}>
      <div className={styles.clock}>{minutes}:{seconds}</div>
      <div
        className={`${styles.button} btn-green`}
        aria-label="Добавить время"
        role="button"
        tabIndex={0}
        onClick={() => dispatch(addTime())}
      >
        +
      </div>
    </div>
  );
}