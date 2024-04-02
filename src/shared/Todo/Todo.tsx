import React from 'react';
import styles from './todo.module.css';
import { RulesList } from './RulesList';
import { ActionForm } from './ActionForm';
import { TodoList } from './TodoList';

export function Todo() {
  return (
    <div className= {styles.wrapper}>
      <h2 className={styles.header}>Ура! Теперь можно начать работать:</h2>
      <RulesList/>
      <ActionForm/>
      <TodoList/>
    </div>
  );
}
