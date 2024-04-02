import React from 'react';
import styles from './tasks.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

export function Tasks() {
  const actions = useSelector((state:RootState) => state.actions)
  return (
    <div className={styles.wrapper}>
      <span className={styles.taskOrder}>Задача 1 - </span>
      <span className={styles.task}>
        {actions.length > 1 ? actions[1].text : "Cверстать сайт"}
      </span>
    </div>
  );
}
