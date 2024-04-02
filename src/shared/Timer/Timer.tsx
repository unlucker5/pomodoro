import React from 'react';
import styles from './timer.module.css';
import { TimerHeader } from './TimerHeader';
import { Clock } from './Clock';
import { Tasks } from './Tasks';
import { TimerButtons } from './TimerButtons';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';



export function Timer() {

  return (
    <div className= {styles.wrapper}>
      <TimerHeader/>
      <Clock/>
      <Tasks/>
      <TimerButtons/>
    </div>
  );
}
