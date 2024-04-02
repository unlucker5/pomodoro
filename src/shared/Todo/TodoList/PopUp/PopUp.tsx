
import React, { useState } from 'react';
import styles from './popup.module.css';
import { AddIcon } from '../../../icons/AddIcon';
import { RemoveIcon } from '../../../icons/RemoveIcon';
import { EditIcon } from '../../../icons/EditIcon';
import { DeleteIcon } from '../../../icons/DeleteIcon';
import { useDispatch } from 'react-redux';
import { addPomodoro, editAction, reducePomodoro } from '../../../../store/actions/reducer';
import { DeleteActionModal } from '../../../modals/DeleteActionModal';

interface PopUpProps {
  index: number;
  onEdit: (index: number) => void;
}

export function PopUp({ index, onEdit }: PopUpProps) {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false)
  
  const handleEditAction = () => {
    onEdit(index);
  };

  return (
    <menu className={styles.menu} type='popup'>
      <li className={styles.listItem} onClick={() => dispatch(addPomodoro({ index }))}>
        <button className={styles.button}>
          <AddIcon />
          <span className={styles.itemText}>Увеличить</span>
        </button>
      </li>
      <li className={styles.listItem} onClick={() => dispatch(reducePomodoro({ index }))}>
        <button className={styles.button}>
          <RemoveIcon />
          <span className={styles.itemText}>Уменьшить</span>
        </button>
      </li>
      <li className={styles.listItem}>
        <button className={styles.button} onClick={handleEditAction}>
          <EditIcon />
          <span className={styles.itemText}>Редактировать</span>
        </button>
      </li>
      <li className={styles.listItem}>
        <button className={styles.button} onClick={() => setModalOpen(true)}>
          <DeleteIcon />
          <span className={styles.itemText}>Удалить</span>
        </button>
      </li>
      {modalOpen && <DeleteActionModal index = {index} modalOpen = {modalOpen} setModalOpen = {setModalOpen}/>}
    </menu>
  );
}