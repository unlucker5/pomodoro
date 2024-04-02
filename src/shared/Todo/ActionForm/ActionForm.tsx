import React, { useState } from 'react';
import styles from './actionform.module.css';
import { addAction } from '../../../store/actions/reducer';
import { useDispatch } from 'react-redux';

export function ActionForm() {
  const dispatch = useDispatch();
  const [taskName, setTaskName] = useState("");

  const handleAddAction = (e:any) => {
    e.preventDefault();
    if (taskName.trim() === "") {
      return;
    }
    dispatch(addAction({ text: taskName, time: 1 }));
    setTaskName("");
 
  };

  return (
    <form className={styles.form}>
      <input 
        type="text"
        className={styles.input}
        placeholder="Название задачи"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button type="submit" className={`${styles.button} btn-green`} onClick={handleAddAction}>
        Добавить
      </button>
    </form>
  );
}
