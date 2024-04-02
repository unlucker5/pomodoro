import React from 'react';
import styles from './logo.module.css';
import { LogoIcon } from '../../icons/LogoIcon';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { refreshGraphClicked } from '../../../store/totalStatistics/reducer';


export function Logo() {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    navigate('/');
    dispatch(refreshGraphClicked())
  };
  
  return (
    <a href="/" className={styles.logo} onClick={handleClick}>
      <LogoIcon size={'40'} />
      <div className={styles.text}>pomodoro_box</div>
  </a>
  );
}
